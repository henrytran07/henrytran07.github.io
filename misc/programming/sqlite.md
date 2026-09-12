# SQLite Notes

# 1. Creating a Database Connection

```python
import sqlite3

connection = sqlite3.connect("database_name.db")
cursor = connection.cursor()
```

### Explanation
- `connect()` → creates or opens a database file
- `cursor()` → object used to execute SQL commands

---

# 2. Creating a Table

Example:

```python
cursor.execute("""
CREATE TABLE customers (
    first_name TEXT,
    last_name TEXT,
    email TEXT
)
""")
```

A table contains:
- Columns → attributes of the data
- Rows → individual records

Example:

| first_name | last_name | email |
|---|---|---|
| John | Brown | john@gmail.com |

---

# 3. SQLite Data Types

SQLite supports five main storage classes:

| Type | Description | Example |
|---|---|---|
| NULL | Missing value | NULL |
| INTEGER | Whole number | 10 |
| REAL | Decimal number | 3.14 |
| TEXT | String | "John" |
| BLOB | Binary data | Image/file |

---

# 4. Reading Data (SELECT)

## Select all records

```sql
SELECT * FROM customers;
```

Python:

```python
cursor.execute("SELECT * FROM customers")
```

---

## Filter records with WHERE

```sql
SELECT *
FROM customers
WHERE last_name = 'Brown';
```

Python:

```python
cursor.execute("""
SELECT *
FROM customers
WHERE last_name = 'Brown'
""")
```

---

# 5. Updating Data

Example:

```sql
UPDATE customers
SET first_name = 'Henry'
WHERE rowid = 1;
```

Python:

```python
cursor.execute("""
UPDATE customers
SET first_name = 'Henry'
WHERE rowid = 1
""")
```

Important:
- Always use `WHERE`
- Without `WHERE`, every row will be updated

---

# 6. Using rowid

SQLite automatically creates a unique row identifier.

```sql
SELECT rowid, *
FROM customers;
```

Example:

| rowid | first_name | last_name |
|-|-|-|
| 1 | John | Brown |
| 2 | Alice | Smith |

---

# 7. Sorting Results

```sql
SELECT rowid, *
FROM customers
ORDER BY last_name;
```

Ascending:

```sql
ORDER BY last_name ASC;
```

Descending:

```sql
ORDER BY last_name DESC;
```

---

# 8. Searching with LIKE

Find names starting with "Br":

```sql
SELECT rowid, *
FROM customers
WHERE last_name LIKE 'Br%';
```

Pattern:

| Symbol | Meaning |
|-|-|
| `%` | Any number of characters |
| `_` | One character |

Examples:

```sql
LIKE 'A%'
```
→ Alice, Andrew

```sql
LIKE '%son'
```
→ Johnson, Wilson

---

# 9. Limiting Results

Return only first 2 rows:

```sql
SELECT rowid, *
FROM customers
LIMIT 2;
```

Useful for:
- Testing queries
- Previewing large databases

---

# 10. Saving Changes

After INSERT, UPDATE, DELETE:

```python
connection.commit()
```

Commit permanently saves changes.

Close connection:

```python
connection.close()
```

---
