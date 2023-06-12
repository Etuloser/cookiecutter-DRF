# 模版生成后执行动作
import shutil


def remove_websites():
    shutil.rmtree("websites")


def main():
    if "{{ cookiecutter.use_vue3 }}" == "n":
        remove_websites()


if __name__ == "__main__":
    main()
