<template>
  <div style="background: #ffffff">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <div class="layout-logo">
        <div><Icon type="ios-analytics" size="22" /> 广从气爱监测平台</div>
      </div>
      <div class="Menu">
        <div class="layout-nav">
          <center>
            <MenuItem name="Index">
              <a href="/" style="color: white; font-weight: bold">网站首页</a>
            </MenuItem>
            <MenuItem name="Fore">
              <a href="/" style="color: white; font-weight: bold">天气预报</a>
            </MenuItem>
            <MenuItem name="Fore">
              <a href="/" style="color: white; font-weight: bold">数值预报</a>
            </MenuItem>
            <MenuItem name="About">
              <a href="/" style="color: white; font-weight: bold">联系我们</a>
            </MenuItem>
          </center>
        </div>
      </div>
    </Menu>
    <center>
      <Card
        style="width: 60%; height: 80%; border-radius: 30px; margin: 10px 5px 15px 20px"
      >
        <center>
          <h3>从化国家气象观测站实况</h3>
          <h3 id="time">2001-04-01 14:45:00</h3>
          <br />
        </center>
        <Table size="small" :loading="loading" :columns="columns1" :data="data1"></Table>
      </Card>
    </center>

    <div style="display: flex">
      <template>
        <div id="inf" style="width: 22%">
          <Card style="width: 80%; border-radius: 20px; margin: 10px 5px 15px 20px">
            <h3 slot="title">CongHua Weather Weibo</h3>
            <p>
              Mock<br />
              今天 14:37 来自
              广东天气_从化【从化重大气象信息快报摘要】清明假期天气晴朗干燥，请注意森林防火和家居用火用电安全；昼夜温差大，早晚气温低，需适时添衣。明天雨止转多云，但气温仍然较低，最高气温17℃左右；3-5日（清明假期）晴天，1....O网页链接
              ​​​​
            </p>
          </Card>
          <Card style="width: 80%; border-radius: 20px; margin: 10px 5px 15px 20px">
            <h3 slot="title">广州气温实况</h3>
            <img
              src="http://10.0.80.1:81/img/gzqw/newT.jpg"
              style="width: 100%; margin: 0 auto"
            />
          </Card>
        </div>
        <div id="web">
          <List style="width: 100%">
            <ListItem>
              <ListItemMeta
                avatar="http://10.0.80.1:81/img/chqjcqx.png"
                title="从化天气"
                description="广州天气是广州市气象局的官方业务网站，为您提供权威、及时、准确的广州天气预报等信息服务。"
              />
            </ListItem>
            <ListItem>
              <ListItemMeta
                avatar="http://10.0.80.1:81/img/departments.png"
                title="从化天气实况"
                description="从化区域站点实况"
              />
            </ListItem>
            <ListItem>
              <ListItemMeta
                avatar="http://10.0.80.1:81/img/GZradar.png"
                title="广州雷达图"
                description="雷达回波图，从蓝到白表示回波强度由小到大（16-75dBz），从不同颜色回波可以判断降雨强度，雨区范围、未来降雨强度和移动。"
              />
            </ListItem>
            <ListItem>
              <ListItemMeta
                avatar="http://10.0.80.1:81/img/departments.png"
                title="广州区域站点实况"
                description="广州区域站点实况"
              />
            </ListItem>
            <ListItem>
              <ListItemMeta
                avatar="http://10.0.80.1:81/img/GZTemp.png"
                title="广州气温分布图"
                description="空气的温度简称气温，它是表示空气冷热程度的物理量。地面观测中测定的气温是离地面1.5米高度处的气温。气温的单位以摄氏度（℃）表示。"
              />
            </ListItem>
          </List>
          <br/>
          <br/><br/><br/>
          <center>
          <h2>决策服务&友情链接</h2>
          <br/>
          <template>
            <Button to="/" target="_blank">从化决策</Button>
            <Button to="/" target="_blank">荔湾决策</Button><br/>
            <Button to="/" target="_blank">白云决策</Button>
            <Button to="/" target="_blank">海珠决策</Button><br/>
            <Button to="/" target="_blank">番禺决策</Button>
            <Button to="/" target="_blank">南沙决策</Button>
            <Button to="/" target="_blank">从化天气</Button>
            </template>
            </center>
        </div>
      </template>
    </div>
    <template>
      <div class="footer">
        <div class="copy-left">© 2022 CongHua,GuangDong</div>
        <span></span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Analog data",
          key: "name",
        },
        {
          title: "Use PHP Input",
          key: "age",
        },
        {
          title: "Analog data",
          key: "address",
        },
      ],
      data1: [
        {
          name: "Simulation1",
          age: "0.01mm",
          address: "10℃",
        },
        {
          name: "Simulation2",
          age: "201.9mm",
          address: "42℃",
        },
      ],
      theme1: "primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 30px;
}
#warp {
  display: flex;
  justify-content: center;
}
.layout-nav {
  width: 100%;
  margin: 0 auto;
  margin-right: 20px;
  color: white;
}

.Menu {
  width: 100%;
  margin: 0 auto;
  margin-right: 20px;
  position: relative;
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}
.footer {
  height: 6%;
  background-color: #f8f8f9;
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
  padding: 5px;
  line-height: 40px;
  color: #666;
}

.copy-left {
  transform: rotate(0deg);
  display: inline-block;
}
.layout-logo {
  height: 60px;
  background: #2d8cf0;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 0px;
  left: 0px;
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}
</style>
