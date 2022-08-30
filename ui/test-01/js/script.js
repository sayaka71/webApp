// JavaScriptでwebAPIを叩いてみる
// https://qiita.com/anago1030/items/5292007ed5db10d25505
// fetch関数を実行するとPromissというオブジェクトが返ってきました。
// Promissとは非同期処理の操作が完了したときに結果を返すものです。 非同期処理とは、ある処理が実行されてから終わるまで待たずに、次に控えている別の処理を行うことです。

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(res);
  console.log(users);
};

callApi();