### React.memo 
untuk memperoleh komponen yang di-memoized, artinya komponen akan di-re-render hanya jika prop yang diberikan berubah
```jsx
const RolesAddBtn = React.memo(({ user }: { user: any }) => {
  // Komponen ini hanya akan di-re-render jika prop user berubah
  return (
    // JSX untuk tombol
  );
});
```

### Filter uniq property

```js
const scopes = [...new Set(authzRoles?.data?.map(role => role.scope))];
```

### Filter Array berdasar data array lainnya menggunakan prop id
```jsx
{authzAbility?.data?.map((d) => {
  // Filter elemen jika id ada di dalam array d?.policies
  if (d?.policies?.some(policy => policy.id === id)) {
    return null;
  }
  // Tampilkan elemen jika id tidak ada di dalam array d?.policies
  return (
    <div key={d.id}>
      {/* Tampilkan data sesuai kebutuhan */}
    </div>
  );
})}
```
