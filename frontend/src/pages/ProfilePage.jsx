import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/css/FloatingCart.css";

function ProfilePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedOrders, setExpandedOrders] = useState(new Set());
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    axios
      .get(`http://localhost:5000/api/orders/${user.id}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Failed to fetch orders");
        setLoading(false);
      });
  }, [user, navigate]);

  const toggleOrder = (orderId) => {
    const newExpanded = new Set(expandedOrders);
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId);
    } else {
      newExpanded.add(orderId);
    }
    setExpandedOrders(newExpanded);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      {/* Back to Home Button */}
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleBackToHome}
          style={{
            background: "linear-gradient(135deg, #9d1347 0%, #ef88ad 100%)",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "25px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(157, 19, 71, 0.3)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 20px rgba(157, 19, 71, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(157, 19, 71, 0.3)";
          }}
        >
          ← Back to Home
        </button>
        <h1
          style={{
            margin: 0,
            color: "#9d1347",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          My Profile
        </h1>
      </div>

      {/* Profile Header Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #9d1347 0%, #ef88ad 100%)",
          color: "white",
          padding: "2rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          boxShadow: "0 4px 20px rgba(157, 19, 71, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          👤
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: "1.8rem" }}>{user?.name}</h2>
          <p style={{ margin: "0.5rem 0 0 0", opacity: 0.9 }}>{user?.email}</p>
        </div>
      </div>

      {/* Order History Section */}
      <h3
        style={{ color: "#9d1347", marginBottom: "1.5rem", fontSize: "1.5rem" }}
      >
        📋 Order History
      </h3>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
            color: "#666",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #9d1347",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <span style={{ marginLeft: "1rem" }}>Loading orders...</span>
        </div>
      ) : error ? (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "8px",
            border: "1px solid #ffcdd2",
          }}
        >
          ❌ {error}
        </div>
      ) : orders.length === 0 ? (
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "#666",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          📭 No orders found
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <div
              key={order.order_id}
              style={{
                marginBottom: "1rem",
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              {/* Order Header */}
              <div
                onClick={() => toggleOrder(order.order_id)}
                style={{
                  padding: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fafafa",
                  borderBottom: expandedOrders.has(order.order_id)
                    ? "1px solid #e0e0e0"
                    : "none",
                }}
              >
                <div>
                  <h4 style={{ margin: 0, color: "#9d1347" }}>
                    Order #{order.order_id}
                  </h4>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    📅{" "}
                    {order.created_at
                      ? new Date(order.created_at).toLocaleString()
                      : "N/A"}
                  </p>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      color: "#2e7d32",
                      fontWeight: "bold",
                    }}
                  >
                    💰 Total: ${order.total_price.toFixed(2)}
                  </p>
                </div>
                <div
                  style={{
                    transform: expandedOrders.has(order.order_id)
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "1.5rem",
                  }}
                >
                  ▼
                </div>
              </div>

              {/* Order Details */}
              {expandedOrders.has(order.order_id) && (
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                  }}
                >
                  <h5 style={{ margin: "0 0 1rem 0", color: "#333" }}>
                    Items:
                  </h5>
                  <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                    {JSON.parse(order.items).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          marginBottom: "0.5rem",
                          padding: "0.5rem",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "6px",
                          listStyle: "none",
                        }}
                      >
                        <strong>{item.name}</strong> × {item.quantity}
                        <span style={{ color: "#666", marginLeft: "0.5rem" }}>
                          (${item.price} each)
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default ProfilePage;
