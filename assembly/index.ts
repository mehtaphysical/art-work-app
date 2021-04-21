import { Context, PersistentVector, u128 } from "near-sdk-core";

@nearBindgen
class ArtWork {
  artistId: string;
  title: string;
  price: u128;
}

const art = new PersistentVector<ArtWork>("art");

export function create(title: string, price: u128): void {
  art.push({
    artistId: Context.sender,
    title,
    price,
  });
}

export function getById(id: i32): ArtWork {
  return art[id];
}

export function update(id: i32, price: u128): void {
  const old = art[id];

  art.replace(id, {
    ...old,
    price,
  });
}

export function del(id: i32): void {
  art.swap_remove(id);
}
