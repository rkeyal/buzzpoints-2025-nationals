"use client";

import { Bonus } from "@/types";
import Table from "../Table";
import { formatDecimal, formatPercent, shortenAnswerline } from "@/utils";
import Link from "next/link";

type BonusTableProps = {
    bonuses: Bonus[]
}

export function BonusTable({ bonuses }: BonusTableProps) {
    const columns = [
        {
            key: "category",
            label: "Category",
        },
        {
            key: "editions",
            label: "Editions"
        },
        {
            key: "heard",
            label: "Heard"
        },
        {
            key: "ppb",
            label: "PPB",
            format: formatDecimal
        },
        {
            key: "easy_part",
            label: "Easy",
            sortKey: "easy_part_sanitized",
            render: (item: Bonus) => (
                <>
                    <Link
                        href={`/set/${item.set_slug}/bonus/${item.slug}`}
                        className="underline"
                    >
                        <span dangerouslySetInnerHTML={{ __html: item.easy_part }}></span>
                    </Link>
                    <span className="ms-1 text-xs font-light">{`(Part ${item.easy_part_number})`}</span>
                </>
            )
        },
        {
            key: "easy_conversion",
            label: "%",
            format: formatPercent
        },
        {
            key: "medium_part",
            label: "Medium",
            sortKey: "medium_part_sanitized",
            render: (item: Bonus) => (
                <>
                    <Link
                        href={`/set/${item.set_slug}/bonus/${item.slug}`}
                        className="underline"
                    >
                        <span dangerouslySetInnerHTML={{ __html: item.medium_part }}></span>
                    </Link>
                    <span className="ms-1 text-xs font-light">{`(Part ${item.medium_part_number})`}</span>
                </>
            )
        },
        {
            key: "medium_conversion",
            label: "%",
            format: formatPercent
        },
        {
            key: "hard_part",
            label: "Hard",
            sortKey: "hard_part_sanitized",
            render: (item: Bonus) => (
                <>
                    <Link
                        href={`/set/${item.set_slug}/bonus/${item.slug}`}
                        className="underline"
                    >
                        <span dangerouslySetInnerHTML={{ __html: item.hard_part }}></span>
                    </Link>
                    <span className="ms-1 text-xs font-light">{`(Part ${item.hard_part_number})`}</span>
                </>
            )
        },
        {
            key: "hard_conversion",
            label: "%",
            format: formatPercent
        }
    ];

    return <Table
        columns={columns}
        data={bonuses.map(b => ({
            ...b,
            easy_part: shortenAnswerline(b.easy_part),
            medium_part: shortenAnswerline(b.medium_part),
            hard_part: shortenAnswerline(b.hard_part),
        }))}
        compact
    />
}