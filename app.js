const langData = {
  en: {
    title: "Duarah Store",
    submit: "Submit Order"
  },
  as: {
    title: "দুৱৰা ষ্ট’ৰ",
    submit: "অৰ্ডাৰ কৰক"
  }
};

function setLang(lang){
  document.getElementById("title").innerText = langData[lang].title;
  document.getElementById("submitBtn").innerText = langData[lang].submit;
}
