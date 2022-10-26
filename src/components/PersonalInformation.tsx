export function PersonalInformation() {
  const name = "cuixiaorui";
  const role = "Software Engineer";
  const email = "your_email@xxx.com";

  return (
    <div class="md:fixed">
      <div class="md:block">
        <div class="flex justify-center">
          <img
            class="h-32 w-32 rounded-full mx-4"
            src="https://avatars3.githubusercontent.com/u/59800600?s=460&u=95f222387f598c85508c9b6d5d8662ebf4ae8b85&v=4"
          />
        </div>
        <div class="mb-12 text-center mt-4 justify-center items-center">
          <h1 class="text-2xl text-gray-800 font-bold">{name}</h1>
          <div class="md:text-lg text-gray-600">{role}</div>
          <div class="text-gray-600 md:hidden mt-1">{email}</div>
        </div>
      </div>
      <div class="mx-4 my-4 hidden md:block">
        {/* 差一个手机号 */}
        <Wechat></Wechat>
        <Github></Github>
        <Email email={email}></Email>
        <City></City>
      </div>
      {/* <div class="mx-4 hidden md:block">
          <a
            href="mailto:moh.usman168@gmail.com"
            class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded text-base"
          >
            Hire me
          </a>
        </div> */}
    </div>
  );
}

// 把这几个 icon 抽离成一个 组件
// 通过配置来修改样式和内容
function Wechat() {
  return (
    <div class="my-5 text-lg text-gray-600 flex">
      <div class="mr-2">
        <svg
          class="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"></path>
          <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"></path>
        </svg>
      </div>
      cuixr1314
    </div>
  );
}

function Email({ email }: any) {
  return (
    <div class="my-5 text-lg text-gray-600 flex">
      <div class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path>
          <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path>
        </svg>
      </div>
      {email}
    </div>
  );
}

function Github() {
  // todo 需要替换成 github
  return (
    <a
      href="https://www.github.com/cuixiaorui"
      target="_blank"
      class="my-5 text-blue-500 text-lg text-gray-600 flex"
    >
      <div class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"></path>
        </svg>
      </div>
      Github
    </a>
  );
}

function City() {
  return (
    <div class="my-5 text-lg text-gray-600 flex">
      <div class="mr-2">
        <svg
          class="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"></path>
          <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"></path>
        </svg>
      </div>
      Beijing
    </div>
  );
}
