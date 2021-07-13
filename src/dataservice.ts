import { ref } from "vue";

//const data = ref<any>([new Date().getTime()]);


async function getData() {
 return await fetch(`https://jsonplaceholder.typicode.com/users`).then( res => res.json() );
}

const data = ref<any>(getData());

export default function () {

  return {
    data
  };
}
