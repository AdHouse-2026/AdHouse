"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { careerSchema } from "@/schema/career-shema";

export default function CareerForm() {
	const form = useForm<z.infer<typeof careerSchema>>({
		resolver: zodResolver(careerSchema),
		defaultValues: {
			name: "",
			email: "",
			mobile: "",
			fileUpload: undefined,
		},
	});

	async function onSubmit(values: z.infer<typeof careerSchema>) {}

	return (
		<div className="w-full">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:px-10">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type="email" placeholder="Email" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="mobile"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type="tel" placeholder="Phone Number" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="fileUpload"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="file"
										accept=".pdf,.doc,.docx"
										onChange={(e) => field.onChange(e.target.files?.[0] || null)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="text-center">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
