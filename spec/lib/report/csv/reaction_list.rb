# frozen_string_literal: true

require 'rails_helper'

describe 'Reporter::Csv::ReactionList instance' do
  include_context 'Report shared declarations'

  before do
    t_file = Tempfile.new(['rspec', '.csv'])
    Reporter::Csv::ReactionList.new(objs: @obj_hash).create(t_file.path)
    @target = Roo::Spreadsheet.open(t_file.path)
  end

  it_behaves_like 'Rinchi Xlsx/Csv formats'
end
