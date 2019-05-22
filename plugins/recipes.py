from pelican import signals
from pelican.contents import Content
from pelican.readers import BaseReader
from pelican.utils import pelican_open
from pelican.generators import Generator

import yaml


class RecipeReader(BaseReader):
    enabled = True
    file_extensions = ['recipe']

    def read(self, filename):
        with pelican_open(filename) as text:
            metadata = yaml.safe_load(text)

        parsed = {}
        for key, value in metadata.items():
            parsed[key] = self.process_metadata(key, value)

        return "Recette de f{recipe['name']}", parsed


class Recipe(Content):
    mandatory_properties = ('title',)
    default_status = 'published'
    default_template = 'recipe'


class RecipeGenerator(Generator):
    def generate_context(self):
        self.recipes = []
        for f in self.get_files('recettes'):
            self.recipes.append(self.readers.read_file(
                base_path=self.path,
                path=f,
                content_class=Recipe,
                context=self.context
            ))


    def generate_output(self, writer):
        for recipe in self.recipes:
            writer.write_file(
                recipe.save_as,
                self.get_template('recipe'),
                self.context,
                recipe=recipe,
                relative_urls=self.settings['RELATIVE_URLS'],
                override_output=hasattr(recipe, 'override_save_as'),
                url=recipe.url)


def add_reader(readers):
    readers.reader_classes['recipe'] = RecipeReader

def get_generators(pelican_obj):
    return RecipeGenerator

def register():
    signals.get_generators.connect(get_generators)
    signals.readers_init.connect(add_reader)
