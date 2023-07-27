import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { VetsModel } from "@/interface/vets";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";
import { Veterinary } from "../interface/appointments";

type SelectVetinaryProps = {
  vets: VetsModel[];
  value: VetsModel;
  onChange: (value: {
    veterinary_name: string;
    address: string;
    building: string;
    contact_number: string;
    avatar: string;
  }) => void;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectVeterinary(props: SelectVetinaryProps) {
  const { vets, value, onChange } = props;
  const [selected, setSelected] = useState(vets[3]);

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Assigned to
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              {value.veterinary_name.length > 0 ? (
                <div className="flex items-center">
                  <Image
                    src={value.avatar}
                    width={25}
                    height={25}
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                    alt=""
                  />
                  <span className="ml-3 block truncate">
                    {value.veterinary_name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 text-gray-700" />
                  <span className="ml-3 block truncate">Select Veterinary</span>
                </div>
              )}
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {vets.map((person, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={person.avatar}
                            width={25}
                            height={25}
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                            alt=""
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.veterinary_name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
