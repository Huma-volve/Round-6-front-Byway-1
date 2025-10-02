import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Video } from "lucide-react";
import { useState } from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
=======
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c

export default function AddCourse() {
  const [preview, setPreview] = useState<string | null>(null);
  const [deleteflag, setDeleteFlag] = useState<boolean>(false);

  const validationSchema = Yup.object({
    coursename: Yup.string().required("Name is required"),
    coursecategory: Yup.string().required("Category is required"),
    courselevel: Yup.string().required("Level is required"),
    description: Yup.string().required("Description is required"),
    videotitle: Yup.string().required("Video title is required"),
    courseprice: Yup.string().required("Price is required"),
    video: Yup.mixed<File>()
      .required("Video is required")
      .test("filesize", "File too large (500MB Max)", (value) =>
        value instanceof File ? value.size <= 500 * 1024 * 1024 : false
      )
      .test("filetype", "Only MP4 is allowed", (value) =>
        value instanceof File ? value.type === "video/mp4" : false
      ),
  });

  return (
    <>
      {deleteflag && (
<<<<<<< HEAD
        <div
          // onClick={() => setDeleteFlag(false)}
          className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-10 flex justify-center items-center "
        >
=======
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-10 flex justify-center items-center ">
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
          <div className="w-full max-w-[1000px] h-auto z-50 bg-white rounded-[25px] flex flex-col p-6 sm:p-8 md:p-10">
            <p className="font-[600] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#0F172A] mb-12 text-center">
              Are you sure you want to delete this video?
            </p>

            <div className="flex flex-col gap-3">
              <button className=" cursor-pointer w-full px-4 py-4 text-red-500  rounded-lg text-lg font-[600]">
                Yes
              </button>
              <button
                onClick={() => setDeleteFlag(false)}
                className=" cursor-pointer w-full px-4 py-4 text-green-500  rounded-lg text-lg font-[600]"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-[30px] lg:gap-[0px]">
<<<<<<< HEAD
        <div className="flex justify-center items-center w-full relative">
          <div className="flex items-center justify-center gap-[4px] sm:gap-[6px] md:gap-[8px] absolute left-0 top-[100%] lg:top-[50%] lg:translate-y-[-50%] flex-wrap">
            <NavLink
              to="/addlink"
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
                  : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
              }
            >
              My Course
            </NavLink>
            <ChevronRight className="size-[16px] sm:size-[18px] md:size-[20px]" />
            <NavLink
              to="/addlink"
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
                  : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
              }
            >
              Course Details
            </NavLink>
            <ChevronRight className="size-[16px] sm:size-[18px] md:size-[20px]" />
            <NavLink
              to="/addcourse"
              className={({ isActive }) =>
                isActive
                  ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
                  : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
              }
            >
              Add Course
            </NavLink>
          </div>

          <p className="font-[600] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
            Add course
          </p>
=======
        <div className="relative w-full">
          <p className="font-[600] text-[24px] md:text-[32px] lg:text-[40px] text-center w-full">
            Add course
          </p>

          <div className="mt-2 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <Breadcrumb>
              <BreadcrumbList className="flex flex-wrap gap-1 sm:gap-2 justify-start">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Profile</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">My Course</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/addcourse" className="text-[#2563EB]">
                    Course Details
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
        </div>

        <Formik
          initialValues={{
            coursename: "",
            coursecategory: "",
            courselevel: "",
            description: "",
            videotitle: "",
            courseprice: "",
            video: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col gap-6 w-full">
              <div className="flex flex-col">
                <label
                  htmlFor="coursename"
                  className="text-lg sm:text-xl md:text-2xl font-[600] mb-2"
                >
                  Course Name
                </label>
                <Field
                  type="text"
                  id="coursename"
                  name="coursename"
                  className="border px-4 w-full sm:w-10/12 rounded h-[60px] sm:h-[72px] md:h-[84px] text-base sm:text-lg md:text-xl font-[400] text-[#727272]"
                />
                <ErrorMessage
                  name="coursename"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="coursecategory"
                  className="text-lg sm:text-xl md:text-2xl font-[600] mb-2"
                >
                  Course Category
                </label>
                <Field
                  type="text"
                  id="coursecategory"
                  name="coursecategory"
                  className="border px-4 w-full sm:w-10/12 rounded h-[60px] sm:h-[72px] md:h-[84px] text-base sm:text-lg md:text-xl font-[400] text-[#727272]"
                />
                <ErrorMessage
                  name="coursecategory"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-[14px] text-[20px] sm:text-[22px] md:text-[24px] font-[600]">
                  Course Level
                </label>

                <div className="w-full max-w-[320px] sm:max-w-[400px]  bg-white rounded-[8px] py-[20px] sm:py-[25px] md:py-[30px] px-[15px] sm:px-[18px] md:px-[20px] h-auto md:h-[220px] border flex flex-col gap-4 md:gap-0 md:justify-between">
                  <label
                    htmlFor="r1"
<<<<<<< HEAD
                    className="font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
=======
                    className="cursor-pointer font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
                  >
                    Beginner
                    <Field
                      hidden
                      type="radio"
                      value="beginner"
                      id="r1"
                      name="courselevel"
                      className="peer"
                    />
                    <div className="size-[24px] sm:size-[26px] md:size-[30px] peer-checked:bg-blue-800 peer-checked:text-white flex justify-center items-center rounded-[8px] text-transparent bg-[#D9D9D9]">
                      &#10003;
                    </div>
                  </label>

                  <label
                    htmlFor="r2"
<<<<<<< HEAD
                    className="font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
=======
                    className="cursor-pointer font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
                  >
                    Intermediate
                    <Field
                      hidden
                      type="radio"
                      value="intermediate"
                      id="r2"
                      name="courselevel"
                      className="peer"
                    />
                    <div className="size-[24px] sm:size-[26px] md:size-[30px] peer-checked:bg-blue-800 peer-checked:text-white flex justify-center items-center rounded-[8px] text-transparent bg-[#D9D9D9]">
                      &#10003;
                    </div>
                  </label>

                  <label
                    htmlFor="r3"
<<<<<<< HEAD
                    className="font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
=======
                    className="cursor-pointer font-[400] text-[16px] sm:text-[18px] md:text-[20px] text-[#727272] flex justify-between items-center"
>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
                  >
                    Advanced
                    <Field
                      hidden
                      type="radio"
                      value="advanced"
                      id="r3"
                      name="courselevel"
                      className="peer"
                    />
                    <div className="size-[24px] sm:size-[26px] md:size-[30px] peer-checked:bg-blue-800 peer-checked:text-white flex justify-center items-center rounded-[8px] text-transparent bg-[#D9D9D9]">
                      &#10003;
                    </div>
                  </label>
                </div>
                <ErrorMessage
                  name="courselevel"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="text-lg sm:text-xl md:text-2xl font-[600] mb-2"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="border px-4 py-4 w-full sm:w-10/12 rounded h-[100px] sm:h-[125px] resize-none text-base sm:text-lg md:text-xl font-[400] text-[#727272]"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="videotitle"
                  className="text-lg sm:text-xl md:text-2xl font-[600] mb-2"
                >
                  Video Title
                </label>
                <Field
                  type="text"
                  id="videotitle"
                  name="videotitle"
                  className="border px-4 w-full sm:w-10/12 rounded h-[60px] sm:h-[72px] md:h-[84px] text-base sm:text-lg md:text-xl font-[400] text-[#727272]"
                />
                <ErrorMessage
                  name="videotitle"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="courseprice"
                  className="text-lg sm:text-xl md:text-2xl font-[600] mb-2"
                >
                  Course Price
                </label>
                <Field
                  type="text"
                  id="courseprice"
                  name="courseprice"
                  className="border px-4 w-full sm:w-10/12 rounded h-[60px] sm:h-[72px] md:h-[84px] text-base sm:text-lg md:text-xl font-[400] text-[#727272]"
                />
                <ErrorMessage
                  name="courseprice"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="w-full">
                <div className="flex flex-col gap-4 max-w-[590px] w-full m-auto mt-8">
                  <div className="w-full flex flex-col">
                    <div
                      onClick={() => document.getElementById("video")?.click()}
                      className="max-w-[590px] w-full h-[200px] sm:h-[250px] md:h-[310px] rounded-[8px] bg-[#F5F5F5A8] flex items-center justify-center cursor-pointer"
                    >
                      {preview ? (
                        <video
                          controls
                          className="w-full h-full object-cover rounded"
                        >
                          <source src={preview} type="video/mp4" />
                        </video>
                      ) : (
                        <Video className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16" />
                      )}
                    </div>
                  </div>

                  {!preview ? (
                    <label
                      htmlFor="video"
                      className="text-base sm:text-lg md:text-xl text-[#A0A0A0] font-[400]"
                    >
                      Upload course video (mp4, max 500MB)
                    </label>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => document.getElementById("video")?.click()}
                    className={`${
                      preview ? "bg-gray-400" : "bg-[#587DBD] cursor-pointer"
                    } py-2 px-6 rounded-[8px] mt-6 text-white self-end text-base sm:text-lg md:text-xl font-[700]`}
                  >
                    + Upload Video
                  </button>

                  <input
                    hidden
                    disabled={preview ? true : false}
                    id="video"
                    name="video"
                    type="file"
                    accept="video/mp4"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0];
                      if (file) {
                        setFieldValue("video", file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  <ErrorMessage
                    name="video"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {preview && (
                <div className="w-full sm:w-[70%] md:w-[40%] mt-12 gap-6 m-auto flex flex-col">
                  <div className="flex flex-col gap-6">
                    <button
                      className="px-4 cursor-pointer py-4 w-full font-[700] rounded-[8px] text-lg sm:text-xl md:text-2xl bg-[#5BAE61] text-white"
                      type="submit"
                    >
                      Save
                    </button>

                    <button
                      className="px-4 cursor-pointer py-4 w-full font-[700] rounded-[8px] text-lg sm:text-xl md:text-2xl bg-white border"
                      type="button"
                    >
                      Add To Draft
                    </button>
                  </div>
                  <button
                    onClick={() => setDeleteFlag(true)}
                    className="px-4 cursor-pointer py-4 w-full font-[700] rounded-[8px] text-lg sm:text-xl md:text-2xl bg-[#EA4335] text-white"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
