"use client";
import React, { useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1 hello" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  // { id: "3", position: { x: 0, y: 200 }, data: { label: "3" } },
];
// const initialNodes = [
//   {
//     id: "0",
//     type: "input",
//     data: { label: "Node" },
//     position: { x: 0, y: 50 },
//   },
// ];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
import useStore from "../store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});
const TheLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  // const [arr, setArr] = useState(initialNodes);
  // const [edgesArr, setEdgesArr] = useState(initialEdges);

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [deleteValue, setDeleteValue] = useState("");
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onAddNodeClick = (nodes, edges) => {
    // let id = Math.random();
    let id = nodes.length + 1;

    // let sourceID = arrayNode.length +1 ;
    console.log("id 1 - " + id);

    let newNode = {
      id: `${id}`,
      position: { x: id * 100, y: id * 100 },
      data: { label: `${id} hello` },
    };
    let newEdge = {
      id: `e${id - 1}-${id}`,
      source: `${id - 1}`,
      target: `${id}`,
      // source: parseInt(id - 1),
      // target: parseInt(id),
    };
    // id++;
    // arrayNode.push({
    //   id: id + 1,
    //   position: { x: 0, y: 200 },
    //   data: { label: `${id + 1} hello` },
    // });
    console.log("id 2 - " + id);
    // setArr(arrayNode);
    setNodes((prevNode) => [...prevNode, newNode]);
    setEdges((prevEdge) => [...prevEdge, newEdge]);
    // setNodes(arr);
    // onNodesChange();
    console.log("nodes -  " + JSON.stringify(nodes));

    // arrayEdge.push({
    //   id: `e${id}-${id + 1}`,
    //   source: parseInt(id),
    //   target: parseInt(id + 1),
    // });
    // setEdgesArr(arrayEdge);
    // console.log("arrayEdge -  " + JSON.stringify(arrayEdge));
  };

  // let nodeId = 0;
  // const reactFlowInstance = useReactFlow();
  // const onAddNodeClick = useCallback(() => {
  //   const id = `${++nodeId}`;
  //   const newNode = {
  //     id,
  //     position: {
  //       x: Math.random() * 500,
  //       y: Math.random() * 500,
  //     },
  //     data: {
  //       label: `Node ${id}`,
  //     },
  //   };
  //   reactFlowInstance.addNodes(newNode);
  // }, []);

  const onDeleteNodeClick = () => {
    setNodes((prevNode) => prevNode.filter((node) => node.id !== deleteValue));
    setEdges((prevEdge) =>
      prevEdge.filter(
        (edge) => edge.source !== deleteValue && edge.target !== deleteValue
      )
    );
    setDeleteValue("");
  };

  const onUndoNodeCLick = () => {};
  const onRedoClick = () => {};

  // const onConnectEnd = useCallback(
  //   (event, connectionState) => {
  //     // when a connection is dropped on the pane it's not valid
  //     if (!connectionState.isValid) {
  //       // we need to remove the wrapper bounds, in order to get the correct position
  //       const id = getId();
  //       const { clientX, clientY } =
  //         "changedTouches" in event ? event.changedTouches[0] : event;
  //       const newNode = {
  //         id,
  //         position: screenToFlowPosition({
  //           x: clientX,
  //           y: clientY,
  //         }),
  //         data: { label: `Node ${id}` },
  //         origin: [0.5, 0.0],
  //       };

  //       setNodes((nds) => nds.concat(newNode));
  //       setEdges((eds) =>
  //         eds.concat({ id, source: connectionState.fromNode.id, target: id })
  //       );
  //     }
  //   },
  //   [screenToFlowPosition]
  // );

  return (
    <div className="relative h-screen w-screen flex bg-red-200 text-black">
      {/* {showSidebar && (
        <aside className="w-64 bg-gray-800 text-white">
          <Sidebar />
        </aside>
      )} */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
      <main className="w-full flex flex-col">
        <Navbar />
        {/* <main className="h-full w-full">{children}</main> */}
        <section className="flex items-center justify-evenly">
          <button
            className="p-2 w-fit
           bg-green-500 rounded-md"
            onClick={() => onAddNodeClick(nodes, edges)}
          >
            Add Node
          </button>
          <input
            placeholder="provide a ndode's number to delete"
            className="py-1.5 px-2 w-80 bg-white rounded-md outline-none"
            value={deleteValue}
            onChange={(e) => setDeleteValue(e.target.value)}
          />
          <button
            className="p-2 w-fit
           bg-red-500 rounded-md"
            onClick={onDeleteNodeClick}
          >
            Delete Node
          </button>
          <button
            className="p-2 w-fit
           bg-gray-500 rounded-md"
            onClick={onUndoNodeCLick}
          >
            Undo Node
          </button>
          <button
            className="p-2 w-fit
           bg-slate-500 rounded-md"
            onClick={onRedoClick}
          >
            Redo Node
          </button>
        </section>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          // onConnectEnd={onConnectEnd}
          // fitView
          // fitViewOptions={{ padding: 2 }}
          // nodeOrigin={nodeOrigin}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </main>
    </div>
  );
};

export default TheLayout;
