# AR House Designer — SD07

An advanced web-based AR application that empowers users to **design and visualize interior spaces** using 3D furniture models — directly from their mobile browser. No app installation required. Seamlessly blending real and virtual, this tool offers both **non-immersive AR** (via `<model-viewer>`) and real-world **AR measurement** functionality.

---


## Demo

**Try it here:** https://practice-iitisoc.vercel.app/
> Works best on mobile devices with WebXR-supported browsers like Chrome or Edge.




##  Team SD07

- **Team Leader:** Sahiba Joshi  
- **Team Members:** Devanshi Kawlani, Sohil Dangi, Disha Dange

##  Project Overview

> “Design your space — directly in your space.”

This project offers users:
- Markerless AR placement of 3D furniture
- Gesture-based control (drag, rotate, scale)
- Category-wise model browsing
- AR measurement tool using real-world geometry
- Lightweight and browser-accessible design

## Key Features

###  Markerless AR Visualization (Non-Immersive)
- `<model-viewer>` integration for quick AR placement
- Drag, rotate, and scale models with gestures
- Screenshot and video capture support

### AR Measurement Tool (Three.js + WebXR)
- Tap to drop anchor points and measure distances
- Dynamic 3D line drawing between points
- Real-time label showing distance in meters/cm
- Reset and start new measurements anytime

### UI Highlights
- Smooth scroll animations with AOS
- Responsive layout with React + Bootstrap
- Integrated dashboards for browsing furniture
- Blender & Sketchfab models preview and switching

---
## Tech Stack


| Area              | Tools / Libraries                       |
|-------------------|------------------------------------------|
| Core Framework | React.js                                 |
| Styling        | CSS, Bootstrap, AOS                      |
|  Build Tool     | Create React App                         |
|  AR Engine      | `<model-viewer>`, Three.js, WebXR        |
|  3D Assets       | Sketchfab, Blender                       |
|  Routing        | React Router                             |
|  Deployment     | Vercel     

