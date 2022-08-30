// JavaScriptでwebAPIを叩いてみる
// https://qiita.com/anago1030/items/5292007ed5db10d25505
function callApi() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res)
};

callApi();