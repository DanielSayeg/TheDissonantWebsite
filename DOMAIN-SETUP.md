# Connect readthedissonant.com to GitHub Pages

Follow these steps once. The repo already has a `CNAME` file pointing to **readthedissonant.com**.

---

## 1. Turn on GitHub Pages

1. Open your repo: **https://github.com/DanielSayeg/TheDissonantWebsite**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: choose **Deploy from a branch**.
   - **Branch**: `main` / **Folder**: `/ (root)`.
   - Click **Save**.
4. Under **Custom domain**, type: **readthedissonant.com** and click **Save**.
5. When the DNS check passes, enable **Enforce HTTPS** (recommended).

Your site will be live at **https://danielsayeg.github.io/TheDissonantWebsite** until DNS for readthedissonant.com is set up; then it will also work at **https://readthedissonant.com**.

---

## 2. Point the domain at GitHub (Namecheap)

1. Log in at **https://www.namecheap.com** → **Domain List** → click **Manage** next to **readthedissonant.com**.
2. Open the **Advanced DNS** tab.
3. Add these records (remove or change any existing A/CNAME for `@` or `www` if they conflict):

### For the root domain (readthedissonant.com)

| Type | Host | Value | TTL |
|------|------|--------|-----|
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

### For www (www.readthedissonant.com)

| Type | Host | Value | TTL |
|------|------|--------|-----|
| CNAME Record | `www` | `danielsayeg.github.io` | Automatic |

4. Save. DNS can take from a few minutes up to 24–48 hours.

---

## 3. Check that it works

- In GitHub **Settings** → **Pages**, the custom domain should show a green check when DNS is correct.
- Visit **https://readthedissonant.com** and **https://www.readthedissonant.com** (with **Enforce HTTPS** on, both will use HTTPS).

If something doesn’t work, double-check the A/CNAME values and that the **Custom domain** in GitHub is exactly **readthedissonant.com** (no `https://` or trailing slash).
