import React, { useEffect, useState } from "react";
import { databases, storage } from "../appwrite";

// Replace with your actual IDs
const DATABASE_ID = "orders_db";
const COLLECTION_ID = "orders";
const BUCKET_ID = "stl_bucket";

type Order = {
  $id: string;
  userId: string;
  items: { fileId: string; fileName: string }[];
  status: string;
  createdAt: string;
};

const STATUS_OPTIONS = [
  "pending",
  "downloaded",
  "printing",
  "importing",
  "arrived",
  "delivering",
  "completed",
];

const OrderTracking: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from Appwrite
  async function fetchOrders() {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setOrders(res.documents as unknown as Order[]);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  }

  // Update status
  async function updateStatus(orderId: string, newStatus: string) {
    try {
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, orderId, {
        status: newStatus,
      });
      setOrders((prev) =>
        prev.map((o) =>
          o.$id === orderId ? { ...o, status: newStatus } : o
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  }

  // Get download URL for files
  function getFileUrl(fileId: string) {
    return storage.getFileView(BUCKET_ID, fileId);
  }

  useEffect(() => {
    fetchOrders();
    // Poll every 10s for live updates (basic approach)
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Order Tracking</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.$id}
              className="p-4 border rounded-lg shadow bg-gray-50"
            >
              <p className="font-semibold">Order ID: {order.$id}</p>
              <p>Customer: {order.userId}</p>
              <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

              <div className="mt-2">
                <p className="font-medium">Files:</p>
                <ul className="list-disc list-inside">
                  {order.items.map((f, i) => (
                    <li key={i}>
                      {f.fileName}{" "}
                      <a
                        href={getFileUrl(f.fileId)}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <label className="mr-2">Status:</label>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.$id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
