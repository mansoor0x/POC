DNS PS5 


 : 62.210.38.117
 : 0.0.0.0

PlayStation 5 WebKit Proof of Concept (PS5-POC)

A structured technical implementation and Proof of Concept (PoC) repository designed for analyzing browser-level memory corruption vulnerabilities and execution lifecycles on target console environments.

---

## 📂 Repository Architecture

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

## ⚙️ Component Breakdown

| Component File | Primary Role & Mechanism |
| :--- | :--- |
| `offsets.mjs` | Defines static memory addresses and offsets corresponding to target firmware versions, ensuring precision alignment and mitigating kernel panic risks. |
| `exploit.js` | Implements heap manipulation strategies and control flow hijacking routines to establish primitive read/write capabilities within the target environment. |
| `sw.js` | Acts as a Service Worker intercepting network calls, ensuring robust local asset serving and isolated offline execution. |
| `exploit.html` & `index.html` | Establish the DOM environment required to trigger WebKit execution vectors and present status telemetry to the operator. |

---

## 🌐 Custom DNS Configuration (Blocking Telemetry & Updates)

To ensure a stable testing environment and prevent unwanted automatic system updates or telemetry checks on your network, configure custom DNS settings on your console:

1. Navigate to **Settings** > **Network** > **Set Up Internet Connection**.
2. Select your connection type (Wi-Fi or LAN) and go to **Advanced Settings**.
3. Set **DNS Settings** to **Manual**.
4. Configure the primary and secondary DNS servers using reliable ad-blocking or update-blocking DNS providers (or your local DNS sinkhole configuration):
   * **Primary DNS:** `Depending on your preferred blocker (e.g., Alby / Safe DNS)`
   * **Secondary DNS:** `Custom Local Gateway or Secondary IP`

---

## 🔒 Security Considerations

* **Firmware Dependency:** Exploits of this nature are tightly bound to specific software versions; patches deployed by the vendor invalidate memory layouts instantly.
* **Controlled Testing:** Deployment should be strictly restricted to isolated research environments intended for vulnerability assessment and defensive hardening analysis.

---

## 📜 License
This project is intended strictly for educational and security research purposes.
