import React from "react";

export function Article({ props }: { props: string | string[] }) {
  return (
    <article>
      {
        typeof props !== 'string' &&
        props.map((e: string, i: number) => <p key={i}>{e}</p>)
      }
      {
        props
      }
    </article>
  );
}
