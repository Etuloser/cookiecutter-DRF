import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

const pathSrc = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig(
  ({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd());
    return {
      plugins: [
        vue(),
        AutoImport({
          // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
          imports: ["vue"],
          eslintrc: {
            enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
            filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
          },
          dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
        }),
        Components({
          dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
        }),
      ],
      resolve: {
        alias: {
          "@": pathSrc
        }
      },
      server: {
        host: "0.0.0.0",
        port: Number(env.VITE_APP_PORT),
        proxy: {
          [env.VITE_APP_BASE_API]: {
            // target: "http://120.77.150.247:30040/", // 线上接口地址
            target: 'http://127.0.0.1:30000/',  // 本地接口地址
            changeOrigin: true,
            rewrite: (path) =>
              path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""), // 替换 /dev-api 为 target 接口地址
          },
        }
      }
    }
  }
)