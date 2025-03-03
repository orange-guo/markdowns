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

## Errors

- [TLS Error: TLS key negotiation failed to occur within 60 seconds (check your network connectivity)](https://openvpn.net/faq/tls-error-tls-key-negotiation-failed-to-occur-within-60-seconds-check-your-network-connectivity/)