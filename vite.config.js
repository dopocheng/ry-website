import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  let localIP = '127.0.0.1'
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    // 过滤掉 VMware 和其他虚拟网络适配器，只选取 WLAN 和以太网的适配器
    if (interfaceName.includes('VMware') || interfaceName.includes('VirtualBox')) {
      continue; // 跳过虚拟适配器
    }
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        localIP = alias.address
        if (interfaceName.includes('WLAN') || interfaceName.includes('Wi-Fi')) {
          return alias.address; // 优先返回WLAN的IP地址
        }
      }
    }
  }
  return localIP; // 如果无法获取局域网IP，返回localhost
}
// 获取IP地址并注入到环境变量
const localIP = getLocalIP();

console.log('ip', localIP)
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_LOCAL_IP': JSON.stringify(localIP),
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    // host: '0.0.0.0', // 绑定到所有网络接口 getLocalIP()
    host: localIP, // 绑定到所有网络接口 getLocalIP()
    port: 3000, // 可以设置为你需要的端口
    open: true, // 自动打开浏览器
    // hmr: {
    //   host: getLocalIP(), // 动态获取当前设备的局域网 IP 地址
    //   port: 3000, // 端口号应与 server.port 保持一致
    // },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

console.log('ip', import.meta.env)
