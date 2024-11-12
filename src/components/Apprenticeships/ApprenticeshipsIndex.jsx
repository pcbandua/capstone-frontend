// import React from "react"

// export function ApprenticeshipsIndex({apprenticeships, onShow}) {
//   return (
//     <div className="py-6" id="signup">
//     <div className="text-3xl" >Apprenticeship Opportunities</div>
      
//       {apprenticeships.map((apprenticeship) => (
//         <div className="p-y 4" key={apprenticeship.id}>
//           <h2>{apprenticeship.title}</h2>
//           {/* <img src={employer.company_logo} alt="logo of the company sponsoring the apprenticeship" /> */}
//           {/* <h3>Employer: {employer.company_name}</h3> */}
//           <p><b>Location:</b> {apprenticeship.location_status}</p>
//           <p><b>Best Suited to Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
//           <p><b>Hourly Compensation:</b> {apprenticeship.compensation}</p>
//           <p><b>Time Committment:</b> {apprenticeship.duration}</p>
//           <button onClick={() => onShow(apprenticeship)}>More Details</button>
//           </div>
//       ))}
//     </div>
//   );
// }

// import * as React from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function ApprenticeshipsIndex({apprenticeships, onShow}) {
//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//   )
// }

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ApprenticeshipsIndex({ apprenticeships, onShow }) {
  return (
    <div className="py-6 max-md: col-span-2" id="signup">
      <div className="text-3xl mb-4">Apprenticeship Opportunities</div>

      {apprenticeships.map((apprenticeship) => (
        <Card key={apprenticeship.id} className="w-full mb-4">
          <CardHeader>
            <CardTitle>{apprenticeship.title}</CardTitle>
            <CardDescription>
              Location: {apprenticeship.location_status}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p><b>Best Suited to Holland Codes:</b> {apprenticeship.holland_code_preference}</p>
            <p><b>Hourly Compensation:</b> {apprenticeship.compensation}</p>
            <p><b>Time Commitment:</b> {apprenticeship.duration}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => onShow(apprenticeship)} variant="outline">
              More Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}