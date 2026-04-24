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
function loadServices(){

  let cat = document.getElementById("category").value;

  let service = document.getElementById("service");

  if(cat === "Online Apply"){
    service.innerHTML = `
      <option>PAN Card</option>
      <option>Voter Card</option>
      <option>Income Certificate</option>
      <option>Non Creamy Layer</option>
    `;
  }

}
