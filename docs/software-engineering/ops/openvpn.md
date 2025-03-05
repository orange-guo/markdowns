# Openvpn

## References

### Ethernet Bridging

- [Ethernet Bridging](https://openvpn.net/community-resources/ethernet-bridging/)
  <br/>Ethernet bridging essentially involves combining an ethernet interface with one or more virtual TAP interfaces
  and bridging them together under the umbrella of a single bridge interface. Ethernet bridges represent the software
  analog to a physical ethernet switch. The ethernet bridge can be thought of as a kind of software switch which can be
  used to connect multiple ethernet interfaces (either physical or virtual) on a single machine while sharing a single
  IP subnet.<br/>By bridging a physical ethernet NIC with an OpenVPN-driven TAP interface at two separate locations, it
  is possible to logically merge both ethernet networks, as if they were a single ethernet subnet.

## Tutorial

- [OpenVPN : Configure VPN Server](https://www.server-world.info/en/note?os=Rocky_Linux_8&p=openvpn&f=1)

## Errors

- [TLS Error: TLS key negotiation failed to occur within 60 seconds (check your network connectivity)](https://openvpn.net/faq/tls-error-tls-key-negotiation-failed-to-occur-within-60-seconds-check-your-network-connectivity/)
- [OpenVPN issue - TLS key negotiation failed to occur within 60 seconds](https://serverfault.com/questions/765521/openvpn-issue-tls-key-negotiation-failed-to-occur-within-60-seconds)
- [OpenVPN的广播问题以及tun和tap设备的深层次挖掘](http://shanks.link/blog/2022/07/11/openvpn%E7%9A%84%E5%B9%BF%E6%92%AD%E9%97%AE%E9%A2%98%E4%BB%A5%E5%8F%8Atun%E5%92%8Ctap%E8%AE%BE%E5%A4%87%E7%9A%84%E6%B7%B1%E5%B1%82%E6%AC%A1%E6%8C%96%E6%8E%98/)
- [使用 OpenVPN 的桥接模式扩展内部局域网](https://juejin.cn/post/6844903737530515469)
- [How to install and use OpenVPN](https://documentation.ubuntu.com/server/how-to/security/install-openvpn/index.html)