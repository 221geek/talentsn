"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function CastingsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Casting Calls</h1>
        <p className="text-muted-foreground">Find and apply to casting opportunities</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Castings</TabsTrigger>
          <TabsTrigger value="acting">Acting</TabsTrigger>
          <TabsTrigger value="modeling">Modeling</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Featured Role in Upcoming Film</CardTitle>
                  <CardDescription>Drama • Lead Role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Los Angeles, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>Starts Jan 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>18-25 years old</span>
                    </div>
                    <p className="line-clamp-2 text-sm">
                      Seeking talented actors for lead roles in an upcoming independent drama film. 
                      Professional experience preferred but not required.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="acting">
          <div className="text-center py-12 text-muted-foreground">
            <p>Acting opportunities will be shown here</p>
          </div>
        </TabsContent>

        <TabsContent value="modeling">
          <div className="text-center py-12 text-muted-foreground">
            <p>Modeling opportunities will be shown here</p>
          </div>
        </TabsContent>

        <TabsContent value="music">
          <div className="text-center py-12 text-muted-foreground">
            <p>Music opportunities will be shown here</p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}