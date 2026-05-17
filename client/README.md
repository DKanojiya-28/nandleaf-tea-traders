# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 <div className="flex items-center gap-4">

    {/* Product Management */}
    <Link
      to="/admin/products"
      className="bg-[#4a7c59] hover:bg-[#3d694a] transition-all duration-300 text-white px-7 h-[54px] rounded-[16px] text-[16px] font-semibold inline-flex items-center justify-center"
    >
      Manage Products
    </Link>

    {/* Logout */}
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 h-[54px] rounded-[16px] text-[16px] font-semibold"
    >
      Logout
    </button>

  </div>