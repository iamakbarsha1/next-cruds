import { GridElementPlusS } from "lovedicons/dist/gridS";
import { SecuEyeS } from "lovedicons/dist/secuS";
import { DesiPenCloseS } from "lovedicons/dist/desiS";
import { EsseTrashS } from "lovedicons/dist/esseS";
import SidebarButton from "../ui/SidebarButton";
import { routePath } from "../utils/routes";

const Sidebar = () => {
  const contentArr = [
    {
      icon: <GridElementPlusS className="mr-2 w-5 h-5" />,
      name: "Create Table",
      route: routePath.create,
    },
    {
      icon: <SecuEyeS className="mr-2 w-5 h-5" />,
      name: "View Table",
      route: routePath.create,
    },
    {
      icon: <DesiPenCloseS className="mr-2 w-5 h-5" />,
      name: "Update Table",
      route: routePath.create,
    },
    {
      icon: <EsseTrashS className="mr-2 w-5 h-5" />,
      name: "Clean Table",
      route: routePath.create,
    },
  ];
  return (
    <main className="w-full md:w-52 h-full px-4 py-3 border-r-2 border-gray-800">
      <div>CRUDS</div>
      <section className="my-2 pt-4">
        {contentArr.map((item, idx) => {
          return (
            <main key={idx}>
              <SidebarButton
                type={"Sidebar"}
                icon={item.icon}
                name={item.name}
                routePath={item.route}
              />
            </main>
          );
        })}
      </section>
    </main>
  );
};

export default Sidebar;
