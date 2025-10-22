# Instant Shopping Demo on X.com

This demo project showcases how to leverage X.com's new immersive link integration to create instant, engaging shopping experiences directly on the platform. By sharing links to interactive product pages, users can experience 3D product visualizations, detailed information, and seamless purchasing flows without leaving X.

## Features

- **3D Product Visualization**: Interactive 3D model of sneakers using React Three Fiber and Three.js
- **Immersive Drawer Interface**: Smooth animated drawer that reveals product details and purchase options
- **X.com Integration**: Optimized for sharing links that create rich, immersive previews on X posts
- **Responsive Design**: Works seamlessly across devices with a modern, dark-themed UI
- **Real-time Quantity Selection**: Dynamic pricing updates based on selected quantity

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React Three Fiber**: React renderer for Three.js, enabling 3D graphics in the browser
- **Framer Motion**: Animation library for smooth, performant animations
- **shadcn/ui**: Modern UI components built on Radix UI and Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vibe-stack/x-shop-demo.git
   cd x-shop-demo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. The app loads with an animated wave effect and opens a product drawer featuring the 3D sneaker model.
2. Interact with the 3D model using mouse controls (orbit, zoom).
3. Adjust quantity using the +/- buttons to see real-time price updates.
4. Click "Buy Now" to simulate a purchase (integrate with your e-commerce backend for real functionality).
5. Share the page URL on X.com to create immersive shopping experiences - X's link previews will display rich content directly in the feed.

## X.com Integration

To create instant shopping experiences on X:

1. Deploy your app to a publicly accessible URL (e.g., Vercel, Netlify)
2. Share the product page link in your X posts
3. X.com's immersive link integration will automatically generate rich previews with product images, descriptions, and interactive elements
4. Users can tap the link to access the full 3D experience without leaving the X app

## Credits

- **3D Model**: "Adidas Yeezy Boost 350 V2" ([https://skfb.ly/oFVHw](https://skfb.ly/oFVHw)) by Nyilonelycompany is licensed under Creative Commons Attribution ([http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/)).

## License

This project is licensed under the MIT License.