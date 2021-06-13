const app = Vue.createApp({
  data() {
    return {
      pagination: "introduction"
    }
  },
  methods: {
    openPagination(collapse) {
      if (collapse === "introduction") {
        this.pagination = "introduction"
      } else if (collapse === "faq") {
        this.pagination = "faq"
      } else if (collapse === "schedule") {
        this.pagination = "schedule"
      } else if (collapse === "message") {
        this.pagination = "message"
      }
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      if (!value) {
        return "電話為必填欄位"
      } else if (!phoneNumber.test(value)) {
        return "需要正確的電話號碼"
      }
      return true
    }
  },
  mounted() {

  }
})
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);
Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});
VeeValidateI18n.loadLocaleFromURL('js/zh_TW.json');

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});
app.mount('#app');
