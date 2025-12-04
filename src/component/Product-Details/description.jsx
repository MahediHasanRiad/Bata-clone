import React from "react";

function Description() {
  return (
    <section className="bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Product Details
      </h2>

      <div className="space-y-4 text-gray-700 leading-relaxed text-base">
        {/* Paragraph 1 */}
        <p>
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ab, doloribus voluptate quasi veniam enim vel perferendis a impedit
          dicta.Lorem, ipsum dolor"Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium ab, doloribus voluptate quasi veniam enim
          vel perferendis a impedit dicta.Lorem, ipsum dolor"Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Laudantium ab, doloribus
          voluptate quasi veniam enim vel perferendis a impedit dicta.Lorem,
          ipsum dolor
        </p>

        {/* Paragraph 2 */}
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold text-gray-800">Key Feature 1:</span>{" "}
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium ab, doloribus voluptate quasi veniam enim vel perferendis
            a impedit dicta.Lorem, ipsum dolor"
          </li>
          <li>
            <span className="font-semibold text-gray-800">
              Material/Fabric:
            </span>{" "}
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium ab, doloribus voluptate quasi veniam enim vel perferendis
            a impedit dicta.Lorem, ipsum dolor"
          </li>
          <li>
            <span className="font-semibold text-gray-800">Dimensions:</span>{" "}
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium ab, doloribus voluptate quasi veniam enim vel perferendis
            a impedit dicta.Lorem, ipsum dolor lor sit amet consectetur
            adipisicing elit. Laudantium ab, doloribus voluptate quasi veniam
            enim vel perferendis a impedit dicta.Lorem, ipsum dolor"
          </li>
        </ul>

        {/* Paragraph 3 */}
        <p>
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ab, doloribus voluptate quasi veniam enim vel perferendis a impedit
          dicta.Lorem, ipsum dolor"
        </p>
      </div>
    </section>
  );
}

export default Description;
