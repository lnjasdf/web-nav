<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div class="mx-24 my-20">
    <div class="flex gap-6">
      <div class="skeleton w-64 h-64">
        缩略图{{ id }} {{ $route.params.id }}
      </div>
      <div class="h-64">
        <h1>标题</h1>
        <p>简介</p>
        <div>
          <button class="btn">官网</button>
          <button class="btn">二维码手机查看</button>
          <button class="btn">反馈</button>
        </div>
      </div>
      <div class="skeleton w-64 h-64 ml-auto mr-8">矩形广告1</div>
    </div>
    <div class="skeleton w-3/4 h-20">横幅广告2</div>
    <div>
      <p>
        Stable Diffusion
        是于2022年发布的一个基于深度学习的AI文本到图像生成模型，该模型主要用于生成以文本描述为条件的详细图像和插画，由初创公司
        StabilityAI 与一些学术研究人员和非营利组织合作开发的。
      </p>
      <p>
        Stable Diffusion是一个潜在扩散模型（Latent Diffusion
        Model）—深度生成性神经网络的一种。Stable
        Diffusion的代码和模型权重已公开发布，可以在大
        多数配备有适度GPU的电脑硬件上运行，而在此之前的专有文生图模型（如DALL-E和Midjourney）只能通过云计算服务访问。
      </p>
      <p>Stable Diffusion在线版本主要可通过以下官方网站访问：</p>
      <ul>
        <li>1.DreamStudio版② （StabilityAI官方推出）</li>
        <li>2. Stable Diffusion XLc（StabilityAI旗下的ClipDrop推出）</li>
      </ul>
    </div>
    <div>文章跳转</div>
    <div>
      <p class=" p-4 bg-amber-100 text-amber-600">
        ◎版权声明：若无特殊声明，本站所有文章版权均归<NuxtLink class="text-amber-300" to="/">AI工具</NuxtLink>集原创和所有，未经许可，任何个人、媒体、网站、团
        体不得转载、抄袭或以其他方式复制发表本站内容，或在非我站所属的服务器上建立镜像。否则，我站将依法保留
        追究相关法律责任的权利。
      </p>
    </div>
    <div>
      <h2>类似于 {{ id }} 的工具</h2>
      <div>工具card list</div>
    </div>
  </div>
</template>

<style lang="scss" module></style>
