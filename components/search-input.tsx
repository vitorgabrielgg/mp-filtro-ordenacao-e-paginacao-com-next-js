"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { deleteQueryParam, getQueryParam, setQueryParam } from "@/utils";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParam = getQueryParam("search") ?? "";

  const [search, setSearch] = useState(searchParam);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let params;
    if (!e.target.value) {
      params = deleteQueryParam("search");
    } else {
      params = setQueryParam("search", e.target.value);
    }

    router.push(`?${params.toString()}`);
    setSearch(e.target.value);
  }

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
