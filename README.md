DNS PS5 


 : 62.210.38.117
 : 0.0.0.0

# PlayStation 5 WebKit Proof of Concept (PS5-POC)

A technical implementation and Proof of Concept (PoC) repository designed for analyzing browser-level memory corruption vulnerabilities and execution lifecycles on target console environments.

---

## Repository Architecture

```text
PS5-POC/
│
├── index.html          # Main entry point and interactive user interface dashboard
├── exploit.html        # Dedicated payload execution container page
├── sw.js               # Service Worker for local caching, interception, and lifecycle management
│
└── modules/
    ├── exploit.js      # Core memory manipulation and exploit logic engine
    └── offsets.mjs     # Architecture and firmware-specific memory offset mappings
```

---

## Component Breakdown

| Component File | Primary Role and Mechanism |
| :--- | :--- |
| `offsets.mjs` | Defines static memory addresses and offsets corresponding to target firmware versions, ensuring precision alignment and mitigating kernel panic risks. |
| `exploit.js` | Implements heap manipulation strategies and control flow hijacking routines to establish primitive read/write capabilities within the target environment. |
| `sw.js` | Acts as a Service Worker intercepting network calls, ensuring robust local asset serving and isolated offline execution. |
| `exploit.html` & `index.html` | Establish the DOM environment required to trigger WebKit execution vectors and present status telemetry to the operator. |

---

## Custom DNS Configuration (Network Isolation and Update Blocking)

To establish a controlled testing environment and prevent automatic system updates or external telemetry transmission, configure manual network parameters:

1. Access console settings and navigate to **Network** > **Set Up Internet Connection**.
2. Select the active interface (Wi-Fi or LAN) and access **Advanced Settings**.
3. Modify **DNS Settings** from automatic to **Manual**.
4. Configure primary and secondary DNS server parameters utilizing dedicated blocking servers or local sinkhole configurations:
   * **Primary DNS:** [Configured Blocker IP]
   * **Secondary DNS:** [Gateway or Secondary IP]

---

## Security Considerations

* **Firmware Dependency:** Vulnerability exploitation primitives are tightly bound to specific software builds; vendor updates invalidate memory layouts and address offsets instantly.
* **Controlled Testing:** Usage must be strictly restricted to isolated research environments intended for vulnerability assessment and defensive hardening analysis.

---

## License
This project is intended strictly for educational and security research purposes.
