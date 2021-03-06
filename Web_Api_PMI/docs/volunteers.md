# Volunteer Endpoint

### ambil semua data relawan

digunakan untuk mengambil data semua relawan yang terdaftar

| method | endpoint            | auth |
| ------ | ------------------- | ---- |
| GET    | /api/v1/volunteers/ | N    |

```js
{

  message:"success gel all data volunteers",
  data:[
      {
          id:1,
          name:"Budi",
          address:"Jl. Nasution no 88 Bondowoso"
          blood_type:"A",
          birth_day:"23-01-2001"
      },
      {
          id:2,
          name:"Ucup",
          address:"Jl. Majapahit no 23 Bondowoso",
          blood_type:"O",
          birth_day:"23-01-2002"
      },

  ]

}
```

### detail relawan

digunakan untuk mengambil data relawan berdasarkan id

| method | endpoint               | params     | auth | access role         |
| ------ | ---------------------- | ---------- | ---- | ------------------- |
| GET    | /api/v1/volunteer/{id} | id relawan | Y    | admin,user,volunter |

```js
{

    message:"success get data with id {id}",
    data:{
    id:2,
    name:"Ucup",
    email:"ucup.com",
    number_phone:"08223456789",
    address:"Jl. Majapahit no 23 Bondowoso",
    blood_type:"O",
    birth_day:"23-01-2001"
    }

}
```

### hapus relawan

digunakan untuk menghapus data relawan berdasarkan id

| method | endpoint               | params     | auth | access role |
| ------ | ---------------------- | ---------- | ---- | ----------- |
| DELETE | /api/v1/volunteer/{id} | id relawan | Y    | admin       |

```js
{
    message:"success delete volunteer",
    data:[
        id:2,
        name:"Ucup",
        email:"ucup.com",
        number_phone:"08223456789",
        address:"Jl. Majapahit no 23 Bondowoso",
        blood_type:"O",
        birth_day:"23-01-2001"
    ]
}
```

### ubah data relawan

digunakan untuk mengubah data relawan yang telah terdaftar

| method | endpoint               | body                                                 | auth | access role |
| ------ | ---------------------- | ---------------------------------------------------- | ---- | ----------- |
| PUT    | /api/v1/volunteer/{id} | username,no_phone,email,address,blood_type,birth_day | Y    | volunteer   |

```js
{
    message:"success update volunteer",
    data:[
        id:2,
        name:"Ucup",
        email:"ucup.com",
        number_phone:"08223456789",
        address:"Jl. Majapahit no 23 Bondowoso"
        blood_type:"O",
        birth_day:"23-01-2001"
    ]
}
```

### register relawan

digunakan untuk registrasi relawan baru

| method | endpoint                        | body                                                          | auth |
| ------ | ------------------------------- | ------------------------------------------------------------- | ---- |
| POST   | /api/v1/auth/volunteer/register | username,no_phone,email,password,address,blood_type,birth_day | N    |

```js
{

 message:"success register volunteer",
 data:{
  id:1,
  name:"Ucup",
  email:"ucup.com",
  number_phone:"08223456789",
  address:"Jl. Majapahit no 23 Bondowoso",
  blood_type:"O",
}


}
```

### login relawan

digunakan untuk login relawan yang sudah terdaftar

| method | endpoint                     | body              |
| ------ | ---------------------------- | ----------------- |
| POST   | /api/v1/auth/volunteer/login | username,password |

```js
{
message:"success login",
data:{
  id:1,
  name:"Ucup",
  email:"ucup.com",
  number_phone:"08223456789",
  address:"Jl. Majapahit no 23 Bondowoso",
  blood_type:"O",
  token:"vjwegrngknergknelrngklerlgnergklerklkle"
}

}
```

### logout relawan

digunakan untuk keluar dan menghapus token

| method | endpoint                      | auth |
| ------ | ----------------------------- | ---- |
| GET    | /api/v1/auth/volunteer/logout | Y    |
