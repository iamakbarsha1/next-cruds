import { create } from "zustand";

const useStore = create((set, get) => ({
  draggedNode: undefined,
  nodes: initialNodes,
  edges: initialEdges,
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  onSetDraggedNode: (node) => {
    set({
      draggedNode: node,
    });
  },
}));

export default useStore;
