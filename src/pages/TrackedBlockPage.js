import React from "react";
import $ from "jquery";
import TrackedBlock from "../components/TrackedBlock";

import "../css/TrackedBlockPage.css";

export default function(props) {
  const blocks = props.blocks;
  const id = props.id;
  const header = props.header;
  return (
    <>
      <div className="text-center">{header}</div>
      <div className="row">
        <div
          className="col-12 col-md-10 col-lg-8 mx-auto"
          id={"content-col-" + id}
        >
          {blocks.map(block => (
            <TrackedBlock key={block.id} id={block.id}>
              {block.content}
            </TrackedBlock>
          ))}
        </div>
        <div
          className="d-none d-xl-block col-xl-2 bd-toc"
          id={"toc-" + id}
          style={{ opacity: 1 }}
        >
          <ul className="section-nav">
            <li className="toc-entry toc-h2">
              <a target="_self" href="#">
                Home
              </a>
            </li>
            {blocks.map(block => TocLink(block))}
          </ul>
        </div>
      </div>
    </>
  );
}

function TocLink(block) {
  return (
    <li key={block.id} className="toc-entry toc-h3">
      <a target="_self" href={"#" + block.id}>
        {block.title}
      </a>
      {block.children && (
        <ul>{block.children.map(subblock => TocLink(subblock))}</ul>
      )}
    </li>
  );
}
