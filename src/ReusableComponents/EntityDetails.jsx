import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import React from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Card from "./Card";

export default function EntityDetails({
  entityData,
  children,
  cardHeight = 36,
}) {
  return (
    <div className="flex w-full flex-col justify-center gap-40 p-4 dark:bg-gray-800/90 md:flex-row">
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-lg font-semibold leading-7 dark:text-white">
          {entityData && entityData[0].details.title}
        </h2>
        <hr className="my-2" />

        <Disclosure defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between rounded-md px-2 py-4 hover:bg-black/5 dark:hover:bg-white/5">
            <span className=" text-sm/6 font-medium dark:text-white">
              {entityData && entityData[0].nav} details
            </span>
            <ChevronDownIcon className="w-5 rounded-sm bg-black/5  group-data-[open]:rotate-180 dark:text-white" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <Transition
              enter="duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="duration-300 ease-out"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <DisclosurePanel className="origin-top transition dark:text-white">
                {children}
              </DisclosurePanel>
            </Transition>
          </div>
        </Disclosure>

        <hr className="mb-4 mt-2" />

        <TabGroup>
          <TabList className="flex gap-4">
            {entityData.slice(1).map(({ nav, details }) => (
              <Tab
                key={nav}
                className="rounded-full px-3 py-1 text-sm/6 font-semibold focus:outline-none disabled:opacity-50 data-[hover]:bg-black/5 data-[selected]:bg-black/10 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-white dark:text-white dark:data-[hover]:bg-white/5 dark:data-[selected]:bg-white/10 dark:data-[selected]:data-[hover]:bg-white/10"
                disabled={Array.isArray(details) && details.length === 0}
              >
                {nav}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {entityData.slice(1).map(({ nav, details }) => (
              <TabPanel
                key={nav}
                className="max-h-80 overflow-y-auto rounded-xl bg-black/5 p-3 dark:bg-white/5"
              >
                <ul
                  className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
                  aria-hidden="true"
                >
                  {/* Avoid rendering an empty array */}
                  {Array.isArray(details) &&
                    details.map((detail, index) => (
                      <React.Fragment key={index}>
                        <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
                          {detail?.name || detail?.title}
                        </li>
                        <li aria-hidden="true">
                          <hr />
                        </li>
                      </React.Fragment>
                    ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
      <div className="flex items-center justify-center ">
        <Card className="cursor-default" style={{ height: `${cardHeight}rem` }}>
          <img
            src={entityData[0].details.image}
            alt="Slide"
            className="h-full rounded-lg object-cover"
          />
        </Card>
      </div>
    </div>
  );
}
