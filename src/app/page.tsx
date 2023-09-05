import Image from "next/image";
import moment from "moment";
import { FaBirthdayCake, FaGithub, FaLinkedinIn, FaRegEnvelope, FaRegMap } from "react-icons/fa";
import Link from "next/link";
import ListSkill from "@/components/ListSkill";
import ProfileSection from "@/components/ProfileSection";

const Profile = () => {
  const data = {
    name: "TAN WEI DI",
    profile_image_url: "/assets/images/profile.jpeg",
    email_address: "weiditan@hotmail.com",
    github_url: "github.com/weiditan",
    linkedin_url: "www.linkedin.com/in/tanweidi",
    mobile_country_code: "60",
    mobile_number: "164328378",
    address_1: "NO 169",
    address_2: "PEKAN KARANGAN",
    address_postcode: "09700",
    address_city: "KARANGAN",
    address_state: "KEDAH",
    dob: "23-01-1996",

    experience_list: [
      {
        company_name: "WEBBY SDN BHD",
        company_city: "PUCHONG",
        company_state: "SELANGOR",
        start_date: "2021-09",
        end_date: "2023-08",
        position: "PHP Programmer",
        description_list: [
          {
            description_title: "Used car sales website and app",
            description_sub_list: [
              "Developed admin and merchant websites using Laravel.",
              "Developed backend RESTful API to support user website.",
              "Developed backend GraphQL API to support user app.",
              "Developed fontend user website using Vue.",
            ],
          },
          {
            description_title: "EV Charging App",
            description_sub_list: [
              "Developed backend GraphQL API to support the admin site, merchant site, and user applications.",
              "Developed backend using NestJs and OCPP 1.6 to control EV charger.",
              "Developed fontend admin and merchant websites using React.",
            ],
          },
          {
            description_title: "Kiosk App",
            description_sub_list: [
              "Developed kiosk app using Android Studio.",
              "Developed backend using PHP.",
            ],
          },
          {
            description_title: "Landing pages",
            description_sub_list: [
              "Developed using HTML and CSS.",
              "Developed using WordPress.",
            ],
          },
        ],
      },
      {
        company_name: "WEBBY SDN BHD",
        company_city: "PUCHONG",
        company_state: "SELANGOR",
        start_date: "2021-03",
        end_date: "2021-09",
        position: "Internship",
        description_list: [
          {
            description_title: "E-Leave system",
            description_sub_list: ["Developed admin and user websites using Laravel."],
          },
          {
            description_title: "Wallpaper sales website",
            description_sub_list: ["Developed admin website using Laravel."],
          },
          {
            description_title: "Used car sales website",
            description_sub_list: [
              "Developed admin and merchant websites using Laravel.",
              "Developed backend RESTful API to support user website.",
            ],
          },
          {
            description_title: "Facebook order website",
            description_sub_list: ["Developed admin and user websites using Laravel."],
          },
        ],
      },
      {
        company_name: "MECACOM TECHNOLOGIES SDN BHD",
        company_city: "BUKIT MERTAJAM",
        company_state: "PENANG",
        start_date: "2016-11",
        end_date: "2017-04",
        position: "Internship",
        description_list: [
          {
            description_title: "Certificate printing system",
            description_sub_list: ["Developed system using vb.net."],
          },
          {
            description_title: "Attendance System",
            description_sub_list: ["Developed admin and user websites using PHP."],
          },
          { description_title: "Install PC and repair PC" },
          { description_title: "Maintain system" },
        ],
      },
    ],
    education_list: [
      {
        education_name: "UNIVERSITI UTARA MALAYSIA",
        education_city: "SINTOK",
        education_state: "KEDAH",
        course: "Degree of Bachelor of Science with Honours (Information Technology)",
        start_year: "2018",
        end_year: "2021",
        start_date: "2018-03",
        end_date: "2021-09",
      },
      {
        education_name: "POLITEKNIK TUANKU SYED SIRAJUDDIN",
        education_city: "ARAU",
        education_state: "PERLIS",
        course: "Diploma in Information Technology",
        start_year: "2014",
        end_year: "2017",
        start_date: "2014-06",
        end_date: "2017-07",
      },
      {
        education_name: "SMK SUNGAI KOB",
        education_city: "SUNGAI KOB",
        education_state: "KEDAH",
        course: "Sijil Pelajaran Malaysia",
        start_year: "2009",
        end_year: "2013",
        start_date: "2009-01",
        end_date: "2013-12",
      },
      {
        education_name: "SJK(C) KHAI MIN",
        education_city: "KARANGAN",
        education_state: "KEDAH",
        course: "Ujian Pencapaian Sekolah Rendah",
        start_year: "2003",
        end_year: "2008",
        start_date: "2003-01",
        end_date: "2008-12",
      },
    ],
    skill: {
      programing_language_list: [
        {
          label: "PHP",
          iconPath: "/assets/images/skills/programming_languages/php.png",
        },
        {
          label: "MYSQL",
          iconPath: "/assets/images/skills/programming_languages/mysql.png",
        },
        {
          label: "JavaScript",
          iconPath: "/assets/images/skills/programming_languages/js.png",
        },
        {
          label: "TypeScript",
          iconPath: "/assets/images/skills/programming_languages/ts.png",
        },
        {
          label: "Vue",
          iconPath: "/assets/images/skills/programming_languages/vue.png",
        },
        {
          label: "React",
          iconPath: "/assets/images/skills/programming_languages/react.png",
        },
        {
          label: "Dart",
          iconPath: "/assets/images/skills/programming_languages/dart.png",
        },
        {
          label: "CSS",
          iconPath: "/assets/images/skills/programming_languages/css.png",
        },
        {
          label: "SASS",
          iconPath: "/assets/images/skills/programming_languages/sass.png",
        },
        {
          label: "Java",
          iconPath: "/assets/images/skills/programming_languages/java.png",
        },
        {
          label: "C#",
          iconPath: "/assets/images/skills/programming_languages/c-sharp.png",
        },
        {
          label: "C++",
          iconPath: "/assets/images/skills/programming_languages/c.png",
        },
      ],
      framework_list: [
        {
          label: "Laravel",
          iconPath: "/assets/images/skills/frameworks/laravel.png",
        },
        {
          label: "Nuxt",
          iconPath: "/assets/images/skills/frameworks/nuxt.png",
        },
        {
          label: "Next",
          iconPath: "/assets/images/skills/frameworks/next.png",
          iconPathDark: "/assets/images/skills/frameworks/next-dark.png",
        },
        {
          label: "Flutter",
          iconPath: "/assets/images/skills/frameworks/flutter.png",
        },
      ],
      api_list: [
        {
          label: "GraphQL",
          iconPath: "/assets/images/skills/apis/graphql.png",
        },
        {
          label: "RESTful API",
          iconPath: "/assets/images/skills/apis/api.png",
        },
      ],
      protocol_list: [
        {
          label: "OCPP",
          iconPath: "/assets/images/skills/protocols/ocpp.png",
        },
      ],
      other_list: [
        {
          label: "Network",
          iconPath: "/assets/images/skills/others/network.png",
        },
        {
          label: "Repair PC",
          iconPath: "/assets/images/skills/others/repair-pc.png",
        },
      ],
    },
  };

  const diffDateFormatted = (startDate: string, endDate: string) => {
    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);

    const diff = endDateMoment.diff(startDateMoment, "months") + 1;
    const diffMonth = diff % 12;
    const diffYear = Math.floor(diff / 12);
    return (diffYear > 0 ? `${diffYear} year${diffYear > 1 ? "s" : ""}` : "") + (diffMonth > 0 ? ` ${diffMonth} month${diffMonth > 1 ? "s" : ""}` : "");
  };

  return (
    <div className={"container"}>
      <div className={"flex flex-col md:flex-row items-center flex-wrap gap-4 p-4"}>
        <div className={"relative h-60 w-60"}>
          <Image
            alt="profile"
            className="object-contain"
            sizes="(max-width: 100px) 100vw"
            src={data.profile_image_url}
            fill
            priority
          />
        </div>
        <div className="grow">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl text-center md:text-left">
              {data.name}
            </h1>
            <div className="flex items-center">
              <div className="w-12">
                <FaRegMap
                  className={"mx-auto"}
                  size={20}
                />
              </div>
              <div className="grow">
                {`${data.address_1},`}
                <br />
                {
                  data.address_2 && (
                    <>
                      {`${data.address_2},`}
                      <br />
                    </>
                  )
                }
                {`${data.address_postcode} ${data.address_city} ${data.address_state}.`}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12">
                <FaBirthdayCake
                  className={"mx-auto"}
                  size={20}
                />
              </div>
              <div className="grow">
                {data.dob}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12">
                <FaRegEnvelope
                  className={"mx-auto"}
                  size={20}
                />
              </div>
              <div className="grow">
                <Link
                  href={`mailto:${data.email_address}`}
                  target="_blank"
                >
                  {data.email_address}
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12">
                <FaGithub
                  className={"mx-auto"}
                  size={20}
                />
              </div>
              <div className="grow">
                <Link
                  href={`https://${data.github_url}`}
                  target="_blank"
                >
                  {data.github_url}
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12">
                <FaLinkedinIn
                  className={"mx-auto"}
                  size={20}
                />
              </div>
              <div className="grow">
                <Link
                  href={`https://${data.linkedin_url}`}
                  target="_blank"
                >
                  {data.linkedin_url}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ProfileSection
        id="experience"
        title={"EXPERIENCE"}
      >
        <div className="flex flex-col gap-6 py-6">
          {
            data.experience_list.map((experience, index) => {
              return (
                <div
                  className="flex flex-col sm:flex-row"
                  key={index}
                >
                  <div className="text-right ml-auto min-w-[200px] sm:order-2">
                    <h3>
                      {`${moment(experience.start_date).format("MMM YYYY")} - ${moment(experience.end_date).format("MMM YYYY")}`}
                    </h3>
                    <p className="text-sm">
                      {diffDateFormatted(experience.start_date, experience.end_date)}
                    </p>
                  </div>
                  <div className="sm:order-1">
                    <h3>
                      {experience.position}
                    </h3>
                    <p>
                      {experience.company_name}
                    </p>
                    <p className="text-sm">
                      {experience.company_city + ", " + experience.company_state}
                    </p>
                    {
                      experience.description_list && (
                        <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                          {
                            experience.description_list.map((description, index) => {
                              return (
                                <div
                                  className="mb-2"
                                  key={index}
                                >
                                  <p>
                                    {`${index + 1}. ${description.description_title}`}
                                  </p>
                                  {
                                    description.description_sub_list?.map((description_sub, index) => {
                                      return (
                                        <div
                                          className="ml-4 flex"
                                          key={index}
                                        >
                                          <p>
                                            -
                                          </p>
                                          <p className="ml-1">
                                            {description_sub}
                                          </p>
                                        </div>
                                      );
                                    })
                                  }
                                </div>
                              );
                            })
                          }
                        </div>
                      )
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </ProfileSection>

      <ProfileSection
        id="education"
        title={"EDUCATION"}
      >
        <div className="flex flex-col gap-6 py-6">
          {
            data.education_list.map((education, index) => {
              return (
                <div
                  className="flex flex-col sm:flex-row"
                  key={index}
                >
                  <div className="text-right ml-auto min-w-[200px] sm:order-2">
                    <h3>
                      {`${moment(education.start_date).format("MMM YYYY")} - ${moment(education.end_date).format("MMM YYYY")}`}
                    </h3>
                    <p className="text-sm">
                      {diffDateFormatted(education.start_date, education.end_date)}
                    </p>
                  </div>
                  <div className="sm:order-1">
                    <h3>
                      {education.course}
                    </h3>
                    <p>
                      {education.education_name}
                    </p>
                    <p className="text-sm">
                      {education.education_city + ", " + education.education_state}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </ProfileSection>

      <ProfileSection
        id="skill"
        title={"SKILL"}
      >
        <ListSkill
          dataListSkill={data.skill.programing_language_list}
          title={"Languages"} />

        <ListSkill
          dataListSkill={data.skill.framework_list}
          title={"Framework"} />

        <ListSkill
          dataListSkill={data.skill.api_list}
          title={"Api"} />

        <ListSkill
          dataListSkill={data.skill.protocol_list}
          title={"Protocol"} />

        <ListSkill
          dataListSkill={data.skill.other_list}
          title={"Other"} />
      </ProfileSection>

    </div>
  );
};

export default Profile;