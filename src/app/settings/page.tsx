"use client";
import Heading from "@/components/heading";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Building,
  Users,
  Calendar,
  CreditCard,
  Settings as SettingsIcon,
  Shield,
  HelpCircle,
  Edit,
  Plus,
  Eye,
  EyeOff,
  Save,
  Check,
} from "lucide-react";

const Settings = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [autoConfirm, setAutoConfirm] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const TabIcon = ({ icon: Icon, children }) => (
    <div className="flex items-center gap-2">
      <Icon size={16} />
      {children}
    </div>
  );

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto">
        <Heading title="Settings" />

        <div className="mt-8">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1 bg-white shadow-sm">
              <TabsTrigger
                value="account"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={User}>Account</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="agency"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={Building}>Agency</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={Users}>Users</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="booking"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={Calendar}>Booking</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={CreditCard}>Payment</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={SettingsIcon}>System</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={Shield}>Security</TabIcon>
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                <TabIcon icon={HelpCircle}>Support</TabIcon>
              </TabsTrigger>
            </TabsList>

            {/* Account Settings */}
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User size={20} />
                    Account Information
                  </CardTitle>
                  <CardDescription>
                    Manage your personal account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Rahul Sharma"
                        className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@example.com"
                        className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="2fa" className="text-sm font-medium">
                          Two-Factor Authentication
                        </Label>
                        <p className="text-sm text-gray-600">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch
                        id="2fa"
                        checked={twoFAEnabled}
                        onCheckedChange={setTwoFAEnabled}
                      />
                    </div>
                    {twoFAEnabled && (
                      <div className="mt-3 text-sm text-green-600 flex items-center gap-2">
                        <Check size={16} />
                        Two-factor authentication is enabled
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Agency Info */}
            <TabsContent value="agency">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building size={20} />
                    Agency Information
                  </CardTitle>
                  <CardDescription>
                    Configure your travel agency details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Agency Name</Label>
                      <Input placeholder="Tripo Adventures" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Support Email
                      </Label>
                      <Input placeholder="support@tripo.com" type="email" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Contact Number
                      </Label>
                      <Input placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Business License
                      </Label>
                      <Input placeholder="License Number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      Office Address
                    </Label>
                    <Input placeholder="Complete office address" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save size={16} className="mr-2" />
                    Update Information
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* User Management */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users size={20} />
                    User Management
                  </CardTitle>
                  <CardDescription>
                    Manage agency staff and their permissions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        3 Active Users
                      </Badge>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Plus size={16} className="mr-2" />
                      Add New User
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        name: "Priya Mehta",
                        role: "Agent",
                        status: "Active",
                        email: "priya@tripo.com",
                      },
                      {
                        name: "Amit Verma",
                        role: "Admin",
                        status: "Active",
                        email: "amit@tripo.com",
                      },
                      {
                        name: "Sneha Rao",
                        role: "Agent",
                        status: "Active",
                        email: "sneha@tripo.com",
                      },
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User size={16} className="text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              user.role === "Admin" ? "default" : "secondary"
                            }
                          >
                            {user.role}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-200"
                          >
                            {user.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit size={14} className="mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Booking Settings */}
            <TabsContent value="booking">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={20} />
                    Booking Configuration
                  </CardTitle>
                  <CardDescription>
                    Set default booking parameters and policies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Maximum Trip Duration
                      </Label>
                      <Input placeholder="10" type="number" />
                      <p className="text-xs text-gray-500">Days</p>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Default Group Size
                      </Label>
                      <Input placeholder="5" type="number" />
                      <p className="text-xs text-gray-500">People</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      Cancellation Policy
                    </Label>
                    <Input placeholder="Free cancellation up to 48 hours before departure" />
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label
                          htmlFor="autoconfirm"
                          className="text-sm font-medium"
                        >
                          Auto-confirm Bookings
                        </Label>
                        <p className="text-sm text-gray-600">
                          Automatically approve new booking requests
                        </p>
                      </div>
                      <Switch
                        id="autoconfirm"
                        checked={autoConfirm}
                        onCheckedChange={setAutoConfirm}
                      />
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save size={16} className="mr-2" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Settings */}
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard size={20} />
                    Payment Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure payment gateways and financial settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Payment Gateway
                      </Label>
                      <Input placeholder="Razorpay API Key" />
                      <p className="text-xs text-gray-500">
                        Your Razorpay public key
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Commission Rate
                      </Label>
                      <div className="relative">
                        <Input
                          placeholder="10"
                          type="number"
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">GST Number</Label>
                    <Input placeholder="Enter your GST registration number" />
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-800 mb-2">
                      Payment Status
                    </h4>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        Connected
                      </Badge>
                      <span className="text-sm text-green-600">
                        Razorpay integration active
                      </span>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save size={16} className="mr-2" />
                    Update Payment Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Preferences */}
            <TabsContent value="system">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon size={20} />
                    System Preferences
                  </CardTitle>
                  <CardDescription>
                    Configure system-wide settings and defaults
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Default Language
                      </Label>
                      <Input placeholder="English" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Currency</Label>
                      <Input placeholder="₹ (INR)" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Timezone</Label>
                      <Input placeholder="Asia/Kolkata" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Notification Preferences
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label
                            htmlFor="notifications"
                            className="text-sm font-medium"
                          >
                            Email Notifications
                          </Label>
                          <p className="text-sm text-gray-600">
                            Receive booking updates and system alerts
                          </p>
                        </div>
                        <Switch
                          id="notifications"
                          checked={notifications}
                          onCheckedChange={setNotifications}
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save size={16} className="mr-2" />
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield size={20} />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and access controls
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Change Password
                    </h4>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          New Password
                        </Label>
                        <div className="relative">
                          <Input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            className="pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      IP Access Control
                    </h4>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Allowed IP Addresses
                      </Label>
                      <Input placeholder="192.168.1.1" />
                      <p className="text-xs text-gray-500">
                        Add trusted IP addresses for enhanced security
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-medium text-red-800 mb-2">
                      Security Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Two-Factor Authentication</span>
                        <Badge
                          variant={twoFAEnabled ? "default" : "destructive"}
                        >
                          {twoFAEnabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Password Strength</span>
                        <Badge variant="secondary">Strong</Badge>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save size={16} className="mr-2" />
                    Update Security Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Support */}
            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle size={20} />
                    Support & Help
                  </CardTitle>
                  <CardDescription>
                    Get assistance and access documentation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                      <HelpCircle
                        size={32}
                        className="mx-auto text-blue-600 mb-3"
                      />
                      <h4 className="font-medium text-gray-900 mb-2">
                        Contact Support
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Get help from our technical support team
                      </p>
                      <Button
                        variant="outline"
                        className="border-blue-200 text-blue-600 hover:bg-blue-50"
                      >
                        Contact Support
                      </Button>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                      <Settings
                        size={32}
                        className="mx-auto text-green-600 mb-3"
                      />
                      <h4 className="font-medium text-gray-900 mb-2">
                        Documentation
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Browse our comprehensive FAQ and guides
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-200 text-green-600 hover:bg-green-50"
                      >
                        View Documentation
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Quick Links
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <Button
                        variant="ghost"
                        className="justify-start text-left"
                      >
                        API Documentation
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-left"
                      >
                        Video Tutorials
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-left"
                      >
                        System Status
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-left"
                      >
                        Feature Requests
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
