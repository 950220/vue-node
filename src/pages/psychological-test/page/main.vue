<template>
  <div class="content">
    <div class="question-content">
      <div class="question-header">
        <div class="question-index">
          <span class="question-index-left">{{totalExamQuestion >= 10&&nextIndex < 10 ? '0' : ''}}{{nextIndex}}</span>/<span class="question-index-right">{{totalExamQuestion}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      totalExamQuestion: 0,
      nextIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  background-image: url('../../../assets/images/test_bg.png');
  background-size: 100% 782px;
  background-repeat: no-repeat;
  height: 100%;
}
.question-content{
  margin: 30px 32px 0px 32px;
  flex: 1;
  .question-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
    .question-index {
      color: #ffffff;
      .question-index-left {
        font-size: 56px;
        font-family: PingFangSc-Medium;
      }
      .question-index-right {
        font-size: 34px;
        font-family: PingFangSc-Regular;
      }
      .icon-gongji {
        font-size:30px;
      }
    }
  }
  .question-content-main {
    background: #ffffff;
    padding: 39px 32px 72px 32px;
    border-radius: 30px;
    box-shadow:0px 15px 30px 0px #CEDFF4;
    margin-bottom: 20px;
    .question-title {
      text-align: left;
      line-height: 56px;
      .question-type {
        font-size: 28px;
        background:#ffffff;
        border-radius: #606266;
        padding: 5px 10px 5px 10px;
        color: #65ACFF;
        font-family: PingFangSc-Medium;
      }
      .question-content {
        word-break: break-all;
        color: #333333;
        font-size: 32px;
        font-family: PingFangSc-Regular;
      }
    }
  }
}
</style>
