import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  age,
  breed,
  calendar,
  clientAvatar,
  messages,
  phone,
  pin,
  sex,
} from "@/assets";

export default function ClientDetails(props) {
  const {
    isClientDetailsOpen,
    setIsClientDetailsOpen,
    clientDetails,
    handleDeleteEvent,
    handleOpenReschedForm,
  } = props;

  return (
    <Transition.Root show={isClientDetailsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setIsClientDetailsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setIsClientDetailsOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-white ">
                    <div className="space-y-6 pb-16">
                      <div className="p-8">
                        <div className=" w-full overflow-hidden rounded-lg justify-start items-center gap-6 flex">
                          <Image
                            src={clientAvatar}
                            width={60}
                            height={60}
                            alt=""
                          />
                          <div className="flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-900 text-2xl font-bold tracking-wide">
                              {clientDetails.clientInformation.clientName ?? ""}
                            </div>
                            <div className="text-neutral-400 text-base font-medium tracking-tight">
                              Client
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[0px] border border-stone-300"></div>
                      <div className="">
                        <div className="w-full h-[174px] px-10 flex-col justify-start items-start gap-5 inline-flex">
                          <div className="text-neutral-400 text-sm font-extrabold tracking-tight">
                            CONTACT INFORMATION
                          </div>
                          <div className="self-stretch h-[137px] flex-col justify-start items-start gap-5 flex">
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={messages}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Email
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.clientInformation.email ?? ""}
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={phone}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Phone
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                +01 234 567 8910
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex ">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={pin}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Address
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.clientInformation.address ?? ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[0px] border border-stone-300 "></div>
                      <div className="">
                        <div className="w-full h-[265px] px-10 flex-col justify-start items-start gap-5 inline-flex">
                          <div className="text-neutral-400 text-sm font-extrabold tracking-tight">
                            CLINIC DETAILS
                          </div>
                          <div className="justify-start items-center gap-6 inline-flex">
                            <Image
                              src={
                                clientDetails.updatedFormData?.veterinary
                                  ?.avatar
                              }
                              width={60}
                              height={60}
                              alt=""
                              className="rounded-full"
                            />
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                              <div className="text-zinc-900 text-base font-bold tracking-tight">
                                {clientDetails.updatedFormData?.veterinary
                                  ?.building ?? ""}
                              </div>
                              <div className="text-neutral-400 text-base font-medium tracking-tight">
                                Los Angeles
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[156px] flex-col justify-start items-start gap-5 flex">
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={messages}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Email
                                </div>
                              </div>
                              <div className="w-[167px] text-zinc-900 text-base font-medium tracking-tight">
                                branch1@gmail.com
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={phone}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Phone
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.veterinary
                                  ?.contact_number ?? ""}
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex space-x-5">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={pin}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Address
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.veterinary
                                  ?.address ?? ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[0px] border border-stone-300 "></div>
                      <div className="">
                        <div className="w-full h-[249px] px-10 flex-col justify-center items-start gap-5 inline-flex">
                          <div className="text-neutral-400 text-sm font-extrabold tracking-tight">
                            PET DETAILS
                          </div>

                          <div className="justify-start items-center gap-6 inline-flex">
                            <div className="flex-row justify-center items-start gap-5 flex">
                              <Image
                                src={
                                  clientDetails.updatedFormData?.pet?.image ??
                                  ""
                                }
                                width={60}
                                height={60}
                                alt=""
                                className="rounded-full"
                              />
                              <div className="flex flex-col">
                                <div className="text-zinc-900 text-base font-bold tracking-tight">
                                  {clientDetails.updatedFormData?.pet?.petName}
                                </div>
                                <div className="text-neutral-400 text-base font-medium tracking-tight">
                                  Dog
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-5 flex">
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={breed}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Breed
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.pet?.breed}
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={sex}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Sex
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.pet?.sex ??
                                  "Male"}
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={age}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Age
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.pet?.age}
                              </div>
                            </div>
                            <div className="justify-start items-start gap-5 inline-flex">
                              <div className="justify-start items-start gap-2 flex">
                                <Image
                                  src={calendar}
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="relative self-center"
                                />
                                <div className="w-[70px] text-neutral-400 text-base font-medium tracking-tight">
                                  Birthday
                                </div>
                              </div>
                              <div className="text-zinc-900 text-base font-medium tracking-tight">
                                {clientDetails.updatedFormData?.pet?.birthday ??
                                  "January 12, 2023"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[0px] border border-stone-300 "></div>
                      <div className="w-full h-full px-10 flex-col justify-start items-start gap-2.5 inline-flex">
                        <button
                          className="self-stretch px-5 py-3 bg-orange-500 rounded-xl justify-center items-center gap-2.5 inline-flex hover:bg-orange-600"
                          onClick={() => handleOpenReschedForm(clientDetails)}
                        >
                          <div className="text-white text-base font-medium tracking-tight">
                            Reschedule Appointment
                          </div>
                        </button>
                        <button
                          className="self-stretch px-5 py-3 bg-white border border-gray-700 rounded-xl justify-center items-center gap-2.5 inline-flex hover:bg-orange-600"
                          onClick={() => handleDeleteEvent(clientDetails.id)}
                        >
                          <div className="text-gray-400 text-base font-medium tracking-tight">
                            Cancel Appointment
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
