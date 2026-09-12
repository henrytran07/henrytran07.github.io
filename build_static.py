from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape

BASE = Path(__file__).resolve().parent
API_BASE = ""

print(BASE)
PAGES = {
    "home.html": BASE / "index.html",
    "cv.html": BASE / "cv" / "index.html",
    "before-you-scale.html": BASE / "templates"/ "before-you-scale",
}


def build():
    env = Environment(
        loader=FileSystemLoader(BASE / "templates"),
        autoescape=select_autoescape(["html"]),
    )
    for template_name, destination in PAGES.items():
        html = env.get_template(template_name).render(api_base=API_BASE)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(html, encoding="utf-8")
        print(f"wrote {destination.relative_to(BASE)}")


if __name__ == "__main__":
    build()
