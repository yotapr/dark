import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
//import SidebarData from '../sidebars/sidebardata/SidebarData';

const BreadCrumbs = () => {
  const location = usePathname();
  const firstUrl = location.split("/")[1];
  const secondUrl = location.split("/")[2];

  return (
    <>
      <h4 className="text-capitalize">
        {secondUrl ? `${secondUrl}` : `${firstUrl}`}
      </h4>
      <Breadcrumb>
        <BreadcrumbItem className="text-decoration-none">
          <Link href="/">Home</Link>
        </BreadcrumbItem>

        {firstUrl ? <BreadcrumbItem active>{firstUrl}</BreadcrumbItem> : ""}
        {secondUrl ? <BreadcrumbItem active>{secondUrl}</BreadcrumbItem> : ""}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
