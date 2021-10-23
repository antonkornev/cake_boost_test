<template>
  <div>
    <modal name="add_account" :adaptive="true" :height="500" :maxHeight="500" :width="864">
      <div class="container">
        <div class="x" @click="close"></div>
          <span class="percents">10% <span class="off">off</span></span>
          <div>
            <span class="firstOrder">for your first order</span>
          </div>
          <div>
            <div class="line"></div>
          </div>
          <div>
            <span class="subscribe">Subscrive to recieve 10% off promo code abs exclusive offers and deals</span>
          </div>
          <div>
            <label for="email">Email</label>
            <div class="w-100"></div>
            <input v-model="email" id="email" type="email">
          </div>
          <div>
            <button class="subscribe-btn" type="button" @click="subscribe">Subscribe!</button>
          </div>
          <div>
            <span class="result" v-bind:class="{ red: isError }" v-if="showRes">{{ getText() }}</span>
          </div>
          <img src="../assert/image.png" alt="no image">
          <div class="color-block first"></div>
          <div class="color-block second"></div>
      </div>
    </modal>
  </div>
</template>
<script>

export default {
  name: "add",
  data() {
    return {
      success: 'You have successfully subscribed to the newsletter',
      error: 'You have already subscribed to the newsletter',
      email: null,
      isError: false,
      showRes: false
    }
  },
  methods: {
    subscribe: function () {
      if(this.$store.getters.isSubscriber(this.email)) {
        this.isError = true
      }
      else {
        this.$store.commit('saveSubscriber', this.email);
        this.isError = false;
      }
      this.showRes = true
    },
    getText: function () {
      return this.isError ? this.error : this.success;
    },
    close: function () {
      this.$modal.hide('add_account')
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900);
.x {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 840px;
  top: 10px;
  background: url(../assert/x.png);
  transform: matrix(1, 0, 0, -1, 0, 0);
  cursor: pointer;
}
span {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
}
.result {
  position: absolute;
  width: 206px;
  height: 11px;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  display: flex;
  align-items: center;
  color: #138418;
}
.red {
  color: #de0000;
}
.line {
  position: static;
  width: 67px;
  height: 2px;
  left: 0;
  top: 50px;
  background: #C24DFE;
  border-radius: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 26px 0;
}
img {
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0% 0%, 0% 0%, 80% 0%, 100% 38%, 100% 100%, 50% 100%, 0% 0%, 0% 0%);
  z-index: 1;
}
.color-block {
  position: absolute;
  width: 224px;
  height: 888px;
  top: -150.02px;
  background: #C24DFE;
  transform: rotate(-15deg);
}
.color-block.first {
  left: 438px;
}
.color-block.second {
  left: 640px;
}
.container {
  padding: 40px 0 0 32px;
}
.percents {
  font-size: 104px;
  line-height: 100%;
  color: #2F3639;
}
.percents > .off {
  font-size: 26px;
  margin-left: -25px;
}
.firstOrder {
  position: static;
  width: 416px;
  height: 24px;
  left: 0;
  top: 0;
  font-size: 24px;
  line-height: 100%;
  color: #828688;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 26px 0;
}
.subscribe {
  position: static;
  width: 319px;
  height: 34px;
  left: 0;
  top: 78px;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #595E61;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 26px 0;
}
.subscribe-btn {
  width: 106px;
  height: 40px;
  background: #C24DFE;
  border-radius: 35px;
  border: 0;
  margin: 16px 0;
  color: white;
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  font-weight: normal;
}
.subscribe-btn :hover {
  background: #bd4ff8;
  cursor: pointer;
}
label[for="email"] {
  font-size: 12px;
  line-height: 14px;
  position: static;
  width: 30px;
  height: 14px;
  left: 0;
  top: 0;
  color: #828688;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0;
}
input {
  position: static;
  height: 40px;
  width: 302px;
  left: 0;
  right: 0;
  top: 0;
  background: #FFFFFF;
  color: #595E61;
  padding: 8px;
  border: 1px solid #D5D7D7;
  box-sizing: border-box;
  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>