import { PersonalInformation } from "./PersonalInformation";
import { Summary } from "./Summary";
export function Resume() {
  return (
    <div class="mt-6 max-w-screen-lg md:flex mx-auto">
      <PersonalInformation></PersonalInformation>
      <div class="md:w-2/3 p-2 w-full">
        <Summary></Summary>
        <div class="mx-4">
          <h1 class="mb-4 text-4xl text-gray-700 font-bold">Experience</h1>
          <ul>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Golang Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma)
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Jan 2021 - Present
                  </small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Data Engineer (ETL, Data Pipeline)
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma)
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Jan 2020 - Present
                  </small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Full Stack Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    PT. Sigma Cipta Caraka (Telkomsigma)
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Jan 2020 - Mar 2020
                  </small>
                </div>
              </div>
            </li>

            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Senior Frontend Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800"> Freelance</small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Jan 2020 - Mar 2020
                  </small>
                </div>
              </div>
            </li>

            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Backend Developer
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    {" "}
                    PT. Bonet Utama
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Dec 2018 - Dec 2019
                  </small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                Data Center (Linux Sysadmin)
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings text-sm" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    {" "}
                    PT. Bonet Utama
                  </small>
                </div>
                <div>
                  <i class="bx bx-calendar text-sm" style="color: #666"></i>
                  <small class="text-sm text-gray-600">
                    Agu 2017 - Okt 2018
                  </small>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <h2 class="text-2xl font-medium text-gray-800">
                IT Support Internship
              </h2>
              <div class="mt-1">
                <div>
                  <i class="bx bx-buildings" style="color: #666"></i>
                  <small class="text-base text-gray-800">
                    PT. Nutrifood Indonesia
                  </small>
                </div>
                <div class="">
                  <i class="bx bx-calendar" style="color: #666"></i>
                  <small class="text-sm text-gray-600">3 Month</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mx-4">
          <h1 class="mb-4 text-4xl text-gray-700 font-bold">Skill</h1>
          <ul>
            <li class="mb-6 flex flex-wrap">
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Flask
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Python Pandas
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                ETL Automation
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Laravel/Lumen
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Composer Dependency
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Codeigniter
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Slim
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                ExpressJS
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Code Principles
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Design Database
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Design Pattern
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                System Analysis
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                VueJS
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                ReactJS
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Tailwind css/Bootstrap
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Sass/Scss
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Web Server
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Mail Server
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                PostgreSQL
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Mysql/MariaDB
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                MonggoDB
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Linux Sysadmin
              </span>
              <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                Networking
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
