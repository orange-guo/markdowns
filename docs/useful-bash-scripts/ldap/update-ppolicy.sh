#!/usr/bin/env bash
# see also
# https://github.com/tiredofit/docker-fusiondirectory/issues/29
# https://kb.brightcomputing.com/knowledge-base/how-do-i-define-a-password-policy-in-ldap/
# https://github.com/osixia/docker-openldap/issues/434
# https://www.openldap.org/doc/admin24/overlays.html
# https://github.com/osixia/docker-openldap
# https://serverfault.com/questions/847814/openldap-setting-up-olcoverlay-ppolicy
# https://www.zytrax.com/books/ldap/ch6/ppolicy.html

LDAP_ADMIN_PASSWORD=${LDAP_ADMIN_PASSWORD:-admin}
LDAP_CONFIG_PASSWORD=${LDAP_CONFIG_PASSWORD:-config}
LDAP_DOMAIN=${LDAP_DOMAIN:-fastonetech.com}
LDAP_BASE_DN=$(cut -d '=' -f 2 <<< "$LDAP_DOMAIN" | tr '.' '\n' | sed 's/^/dc=/' | paste -sd, -)

function main() {
  ldapmodify -x -D cn=admin,cn=config -w "$LDAP_CONFIG_PASSWORD" <<< "
dn: cn=module{0},cn=config
changetype: modify
add: olcModuleLoad
olcModuleLoad: ppolicy

dn: olcOverlay=ppolicy,olcDatabase={1}mdb,cn=config
changetype: add
objectClass: olcPPolicyConfig
objectClass: olcOverlayConfig
olcOverlay: ppolicy
olcPPolicyDefault: cn=default,ou=ppolicy,$LDAP_BASE_DN
olcPPolicyHashCleartext: TRUE
olcPPolicyUseLockout: TRUE
"

  ldapmodify -x -D cn=admin,$LDAP_BASE_DN -w "$LDAP_ADMIN_PASSWORD" <<< "
dn: ou=ppolicy,$LDAP_BASE_DN
changetype: add
objectClass: organizationalUnit
objectClass: top
ou: ppolicy

dn: cn=default,ou=ppolicy,$LDAP_BASE_DN
changetype: add
objectClass: top
objectClass: device
objectClass: pwdPolicy
cn: default
pwdAttribute: userPassword
pwdAllowUserChange: TRUE
pwdCheckQuality: 1
pwdExpireWarning: 0
pwdFailureCountInterval: 0
pwdInHistory: 0
pwdLockout: FALSE
pwdLockoutDuration: 0
pwdMaxAge: 0
pwdMaxFailure: 0
pwdMinLength: 12
pwdMustChange: FALSE
pwdSafeModify: FALSE
"
}

main "$@"

# id=$(cat /etc/ldap/slapd.d/cn\=config/cn\=module\{0\}.ldif | grep olcModuleLoad | grep ppolicy | tr ': ' '\n' | grep ppolicy)
# ls /etc/ldap/slapd.d/cn\=config/olcDatabase\=\{1\}mdb/

ldapsearch -x -D cn=admin,$LDAP_BASE_DN -w EW2YW4uqCY0bffxw  -b $LDAP_BASE_DN
ldappasswd -x -D uid=gxc,ou=users,$LDAP_BASE_DN -w 1 -S