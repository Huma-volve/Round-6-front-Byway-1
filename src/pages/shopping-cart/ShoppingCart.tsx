import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TopLevel } from "@/types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";
import cover from "@/assets/images/graphic design cover.png";

export default function ShoppingCart() {
  const [cart, setCart] = useState<TopLevel[] | null>(null);
  const API_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token") || "";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${API_URL}api/cart`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch cart");
        const data: TopLevel[] = await res.json();
        setCart(data.length ? data : null);
      } catch (error) {
        console.error(error);
        setCart(null);
      }
    };

    fetchCart();
  }, []);

  // fallback data if no API response
  const fallbackCart: TopLevel[] = [
    {
      id: 1,
      student_id: 1,
      course_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      course: {
        id: 1,
        instructor_id: 1,
        category_id: 1,
        title: "Graphic Design",
        description: "Learn graphic design fundamentals",
        price: "400",
        compare_price: "410",
        image: cover,
        cover_public_id: "",
        lessons_count: 155,
        level: "All levels",
        duration_hours: 22,
        total_minutes: 1320,
        video_provider: null,
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),
      },
    },
  ];

  const cartData = cart ?? fallbackCart;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Title & Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/courses">Browse Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/details">Details</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-black font-medium">Shopping Cart</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Course Items */}
        <div className="lg:col-span-2">
          {cartData.map((item) => (
            <Card key={item.id} className="border rounded-lg shadow-sm mb-4">
              <CardContent className="flex flex-col sm:flex-row gap-6 p-6">
                {/* Thumbnail */}
                <img
                  src={item.course.image}
                  alt={item.course.title}
                  className="w-full sm:w-40 h-28 object-cover rounded-md"
                />

                {/* Info */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.course.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    By Instructor ID: {item.course.instructor_id}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span>
                      {item.course.duration_hours} Hours ·{" "}
                      {item.course.lessons_count} Lectures · {item.course.level}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex gap-4 text-sm">
                    <button className="hover:underline text-blue-600">
                      Save for later
                    </button>
                    <button className="hover:underline text-red-600">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-lg font-semibold text-green-600 whitespace-nowrap">
                  {item.course.price} EGP
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right - Summary */}
        <Card className="p-6 h-fit">
          <div className="flex justify-between mb-2">
            <span>Price</span>
            <span className="font-medium">{cartData[0].course.price} EGP</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Compare Price</span>
            <span className="font-medium">
              {cartData[0].course.compare_price} EGP
            </span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>
              {Number(cartData[0].course.price) -
                Number(cartData[0].course.compare_price)}{" "}
              EGP
            </span>
          </div>
          <Button
            className="w-full mt-6 bg-green-600 hover:bg-green-700"
            onClick={() => navigate("/payment")}
          >
            Proceed to Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
}
