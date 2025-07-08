<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

import { Menu as IconMenu, Message } from '@element-plus/icons-vue'

useHead({
  title: 'Vitesse',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <el-config-provider>
    <el-container>
      <el-header class="flex items-center justify-between">
        <img src="https://element-plus.org/images/element-plus-logo.svg" style="width: 128px;height: 28px">
        <el-avatar> W </el-avatar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu :default-openeds="['1', '2']" default-active="1-1">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><Message /></el-icon>客服CRM
                </template>
                <el-menu-item-group>
                  <template #title>
                    信息查询
                  </template>
                  <el-menu-item index="1-1">
                    用户管理
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    商户管理
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><IconMenu /></el-icon>支付CRM
                </template>
                <el-menu-item-group>
                  <template #title>
                    操作记录
                  </template>
                  <el-menu-item index="2-1">
                    人工记录
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    机器记录
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main>
            <el-scrollbar>
              <RouterView />
            </el-scrollbar>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </el-config-provider>
</template>
