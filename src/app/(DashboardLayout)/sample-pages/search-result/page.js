"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Link from "next/link";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

const listdata = [
  {
    category: "AngularJs",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 1,
  },
  {
    category: "AngularJS — Superheroic JavaScript MVW Framework",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 2,
  },
  {
    category: "AngularJS Tutorial - W3Schools",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 3,
  },
  {
    category: "Introduction to AngularJS - W3Schools",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 4,
  },
  {
    category: "AngularJS Tutorial",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 5,
  },
  {
    category: "Angular 20: One framework.",
    site: "www.google.com/angularjs",
    desc: "Lorem Ipsum viveremus probamus opus apeirian haec perveniri, memoriter.Praebeat pecunias viveremus probamus opus apeirian haec perveniri, memoriter.",
    id: 6,
  },
];

const SearchResult = () => {
  return (
    <div>
      <BreadCrumbs />
      <Card>
        <CardBody>
          <CardTitle tag="h4">
            Search Result For &quot;Angular Js&quot;
          </CardTitle>
          <CardSubtitle className="text-muted">
            About 14,700 result ( 0.10 seconds)
          </CardSubtitle>
          <ListGroup flush className="search-listing mt-4 ">
            {listdata.map((list) => (
              <ListGroupItem
                className="px-0 py-4 border-top-0 border-bottom"
                key={list.id}
              >
                <h4 className="mb-0">
                  <Link
                    href="/"
                    className="text-decoration-none font-medium p-0"
                  >
                    {list.category}
                  </Link>
                </h4>
                <Link href="/" className="search-links p-0 text-success">
                  {list.site}
                </Link>
                <p className="mb-0">{list.desc}</p>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Pagination aria-label="Page navigation example" className="mt-3">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchResult;
