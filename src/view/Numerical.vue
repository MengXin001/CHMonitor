<template>
  <div style="display: flex; background: #f8f8f9">
    <div style="padding: 10px">
      <Card
        :padding="0"
        shadow
        style="width: 300px"><p slot="title"><Icon type="ios-options" size="18"></Icon> NWP Model</p>
        <CellGroup>
          <Cell title="ECMWF" extra="" to="/Numerical" />
          <Cell title="GRAPES" extra="" to="/Numerical" />
          <Cell title="GRAPES" extra="" to="/Numerical" />
          <Cell title="GRAPES" disabled />
          <Cell title="GRAPES" disabled />
          <Cell title="Index Page" to="/" target="_blank" />
        </CellGroup>
      </Card>
      <br/>
      <Card
        :padding="0"
        shadow
        style="width: 300px"
      >
      <p slot="title"><Icon type="ios-radio-outline" size="22"></Icon> Pearl River Delta phased array networking
        </p>
      <img
              src = "http://10.0.81.1:81/php/img/gdxkzldt/24xkz5.jpg"
              style="width: 1%; margin: 0 auto"
            />
        
      </Card>
    </div>
    <Row type="flex" justify="center" style="padding: 9px 5px 40px 30px">
      <!-- <Col span="15" style="background:#409eff;"> -->
      <Col span="30" style="text-align=center" align="center">
        <Card style="width: 900px">
          <h2 style="font-weight: bold">NWP Model Platform</h2>
          <br />
          <div style="text-align: center">
            <img
              :src = pic
              style="width: 60%; margin: 0 auto"
            />
            <br />

            <center>
              <Form :model="formItem">
                <FormItem label="Select" :label-width="200" style="margin-right: 20%">
                  <Select v-model="formItem.select" style="width: 280px">
                    <Option value="EF">1</Option>
                    <Option value="G3">2</Option>
                    <Option value="G9">3</Option>
                  </Select>
                </FormItem>
                <FormItem label="Time" :label-width="200" style="margin-right: 20%">
                  <Input
                    type="text"
                    maxlength="3"
                    placeholder="(From 0 To 240(MinStep 6))"
                    style="width: 280px"
                    v-model="formItem.input"
                  />
                </FormItem>
              </Form>
            </center>
            <br />
            <Button
              :loading="formValidate.loading"
              v-on:click="request"
              type="success"
              size="medium"
              style="width: 70px"
              ><span v-if="!formValidate.loading">Get</span></Button
            ><Button style="margin-left: 18px">Cancel</Button>

          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { axiosGet } from "../data";
export default {
  data() {
    return {
      pic: "./grapesmeso_gd_cape.png",
      formItem: {
        input: "",
        select: "",
      },
      formValidate: {
        loading: false,
      },
    };
  },
  methods: {
    request() {
      
      const self = this;
      let num
      let mockurl
      this.formValidate.loading = true;
      if (this.formItem.select == "EF"){mockurl = "/mock.json";num = this.formItem.input}
      if (this.formItem.select == "G9"){mockurl = "/mock2.json"}
      if (this.formItem.select == "G3"){mockurl = "/mock3.json";num = this.formItem.input}
      axiosGet(mockurl, {
      }).then(function (res) {
        console.log(res);
        if (res.seq == "501") {
          self.formValidate.loading = false;
          self.pic = res.data[num].url;
        }
      });
    },
    toLoading() {
      setTimeout(() => {
        this.formValidate.loading = true;
      }, 20);
    },
  },
};
</script>
<style></style>
